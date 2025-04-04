import * as Types from "../graphql.d";

import { gql } from "@apollo/client";
export type CurrentPageFieldsFragment = {
  __typename?: "Page";
  id: string;
  items?: any | null;
  title: string;
};

export const CurrentPageFieldsFragmentDoc = gql`
  fragment CurrentPageFields on Page {
    id
    items
    title
  }
`;
