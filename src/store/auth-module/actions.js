import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import graphqlClient from "graphql";
import { computed } from "vue";
export function GET_POSTS({ commit }) {
  const { result, loading, error } = useQuery(gql`
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
