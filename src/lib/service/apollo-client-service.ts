import { from, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from "@apollo/experimental-nextjs-app-support";

import { HOST_CONFIG } from "@/configs/HOST_CONFIG";
import jwt from "@/configs/JWT";

export const { getClient, query } = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      link: from([
        setContext((_, { headers }) => ({
          headers: {
            "Accept-Language": "mn",
            authorization: `Bearer ${jwt}`,
            ...headers,
          },
        })).concat(
          new HttpLink({
            fetch: (url, init) =>
              fetch(url, { ...init, next: { revalidate: 60 * 60 } }),
            uri: `${HOST_CONFIG.host}/graphql`,
          }),
        ),
      ]),
    }),
);

// old old
// import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import { registerApolloClient } from '@apollo/experimental-nextjs-app-support';
//
// import { HOST_CONFIG } from '@/configs/HOST_CONFIG';
// import jwt from '@/configs/JWT';
//
// export const { getClient } = registerApolloClient(() => {
//   const auth = authLink.concat(
//     new HttpLink({ fetch: (url, init) => fetch(url, { ...init, next: { revalidate: 60 * 60 } }), uri: `${HOST_CONFIG.host}/graphql` }),
//   );
//   return new ApolloClient({ cache: new InMemoryCache(), link: from([auth]) });
// });
//
// const authLink = setContext((_, { headers }) => ({ headers: { 'Accept-Language': 'mn', authorization: `Bearer ${jwt}`, ...headers } }));
