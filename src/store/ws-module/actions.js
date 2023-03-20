import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
export function GET_POSTS({ commit }) {
  const { result } = useQuery(gql`
    query MyQuery {
      posts {
        id
        title
      }
    }
  `);
  console.log("success");
  commit("SET_POSTS", result);
  return result;
}
