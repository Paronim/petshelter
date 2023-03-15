import { useQuery, provideApolloClient } from '@vue/apollo-composable';
import { ApolloClient } from '@apollo/client/core'
import { getClientOptions } from 'src/apollo/index';

export function GET_DATA_ANIMALS ( {commit}, query ) {

  const apolloClient = new ApolloClient(getClientOptions())

  provideApolloClient(apolloClient);

  const { result, loading, error } = useQuery(query)
    console.log(result)
    commit('SET_ANIMALS_TO_STATE', result)
    return { result }
  }
