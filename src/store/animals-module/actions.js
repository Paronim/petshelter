import { useQuery } from '@vue/apollo-composable';
import  { provideApolloClientFunction } from 'src/QueryStore/query';


export function GET_DATA_ANIMALS ( {commit}, query ) {

  provideApolloClientFunction()

  const { result, loading, error } = useQuery(query)
    console.log(result)
    commit('SET_ANIMALS_TO_STATE', result)
    return { result }
  }
