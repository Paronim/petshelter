import gql from "graphql-tag";
import { ApolloClient } from '@apollo/client/core'
import { getClientOptions } from 'src/apollo/index';
import { provideApolloClient } from "@vue/apollo-composable";

export function provideApolloClientFunction () {
  const apolloClient = new ApolloClient(getClientOptions())

  provideApolloClient(apolloClient);
}

function SORT_ANIMALS (typeSortVariable) {
return gql`
query MyQuery {
  animals(order_by: {id: desc}, where: {type: {${typeSortVariable}}}) {
    id
    breed
    info
    name
    sex
    sterilization
    type
    age
    image
  }
}
  `
}

  export default {
    SORT_ANIMALS,
  }
