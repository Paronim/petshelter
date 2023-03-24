import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
export function GET_USERS({ commit }) {
  const { result } = useQuery(gql`
    query {
      users {
        user_id
        id
      }
    }
  `);
  console.log("success");
  commit("SET_USERS", result);
  return result;
}
