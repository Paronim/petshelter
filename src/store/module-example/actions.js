import {useQuery} from '@vue/apollo-composable';
import gql from 'graphql-tag';

export function GET_POSTS ({commit}) {
  const {result, loading, error} = useQuery(gql`
  query MyQuery{
    requests {
      FIO
      age
      email
      name
      phone
      sex
    }
  }
  `);
  commit('SET_POSTS', result);
  return result;
}
// export function SET_POSTS ({commit}) {
//   const {result, loading, error} = useQuery(gql`
//   query MyQuery{
//     requests {
//       FIO
//       age
//       email
//       name
//       phone
//       sex
//     }
//   }
//   `);
//   commit('SET_POSTS', result);
//   return result;
// }
