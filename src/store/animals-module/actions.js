import { useQuery } from '@vue/apollo-composable';
import  { provideApolloClientFunction } from 'src/QueryStore/query';


export function GET_DATA_ANIMALS ( {commit}, query ) {

  provideApolloClientFunction()

  const { result } = useQuery(query)

    commit('SET_ANIMALS_TO_STATE', result)

  }
