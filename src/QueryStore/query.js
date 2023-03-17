import gql from "graphql-tag";
import { ApolloClient } from '@apollo/client/core'
import { getClientOptions } from 'src/apollo/index';
import { provideApolloClient } from "@vue/apollo-composable";

const apolloClient = new ApolloClient(getClientOptions())

export function provideApolloClientFunction () {

  provideApolloClient(apolloClient);
}

function SORT_ANIMALS (typeSortVariable, ageSortVariable) {
return gql`
query MyQuery {
  animals(order_by: {id: desc}, where: {type: {${typeSortVariable}}, _and: {age: {${ageSortVariable}}}}) {
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
