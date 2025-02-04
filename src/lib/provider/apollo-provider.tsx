'use client';

import { ApolloLink, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { relayStylePagination } from '@apollo/client/utilities';
import { ApolloClient, ApolloNextAppProvider, InMemoryCache, SSRMultipartLink } from '@apollo/experimental-nextjs-app-support';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { OauthFlow } from 'doorkeeper-oauth-flow';
import cookies from 'js-cookie';
import type { ReactNode } from 'react';

import { APP_CONFIG } from '@/configs/APP_CONFIG';
import { HOST_CONFIG } from '@/configs/HOST_CONFIG';
import { STORE_KEY_CONFIG } from '@/configs/STORE_KEY_CONFIG';

export function ApolloProvider({ children }: { children: ReactNode }) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}

function makeClient() {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Query: { fields: { vendors: relayStylePagination(['filter', 'sort']) } },
      },
    }),
    link: authLink.concat(getLink()),
  });
}

const oauthFlow = new OauthFlow({ uid: APP_CONFIG.tokens.uid, secret: APP_CONFIG.tokens.secret, host: HOST_CONFIG.host });

export const authLink = setContext((_, { headers }) =>
  oauthFlow
    .generateTokenWithRefresh(cookies.get(STORE_KEY_CONFIG.NEXT_USER_TOKEN) || cookies.get(STORE_KEY_CONFIG.NEXT_CLIENT_TOKEN))
    .then((token) => ({
      headers: { ...headers, authorization: token?.access_token ? `Bearer ${token.access_token}` : '', 'Accept-Language': 'mn' },
    })),
);

export function getLink() {
  const httpLink = ApolloLink.split(
    (operation) => operation.getContext().upload,
    createUploadLink({ uri: `${HOST_CONFIG.host}/graphql` }),
    new HttpLink({ uri: `${HOST_CONFIG.host}/graphql`, fetchOptions: { cache: 'no-store' } }),
  );

  if (typeof window === 'undefined') return ApolloLink.from([new SSRMultipartLink({ stripDefer: true }), httpLink]);

  return httpLink;
}
