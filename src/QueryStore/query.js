import gql from "graphql-tag";
import { ApolloClient } from "@apollo/client/core";
import { getClientOptions } from "src/apollo/index";
import { provideApolloClient } from "@vue/apollo-composable";
import { ref } from "vue";

const apolloClient = new ApolloClient(getClientOptions());

function provideApolloClientFunction() {
  provideApolloClient(apolloClient);
}

const QUERY_ANIMAL = ref();

function SORT_ANIMALS(
  typeSortVariable,
  ageSortVariable,
  sexSortVariable,
  sterilizationSortVariable
) {
  QUERY_ANIMAL.value = gql`
query MyQuery {
  animals(order_by: {date: desc}, where: { sex: {${sexSortVariable}}, sterilization: {${sterilizationSortVariable}}, type: {${typeSortVariable}}, _and: {age: {${ageSortVariable}}}}) {
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
  `;
  return QUERY_ANIMAL.value;
}

const ADD_ANIMAL = gql`
  mutation AddNewAnimal(
    $age: Int
    $breed: String
    $image: String
    $info: String
    $name: name
    $sex: Boolean
    $sterilization: Boolean
    $type: String
    $date: date
  ) {
    insert_animals_one(
      object: {
        age: $age
        breed: $breed
        image: $image
        info: $info
        name: $name
        sex: $sex
        sterilization: $sterilization
        type: $type
        date: $date
      }
    ) {
      id
      age
      breed
      image
      info
      name
      sex
      sterilization
      type
      date
    }
  }
`;

function UPDATE_ANIMAL(id) {
  return gql`
      mutation MyMutation ( $age: Int, $breed: String, $image: String, $info: String, $name: name, $sex: Boolean, $sterilization: Boolean, $type: String){
        update_animals(where: {id: {${id}}}, _set: {age: $age, breed: $breed, image: $image, info: $info, name: $name, sex: $sex, sterilization: $sterilization, type: $type}) {
          returning {
            id
            age
            breed
            image
            info
            name
            sex
            sterilization
            type
            date
          }
        }
      } `;
}

function DELETE_ANIMAL(id) {
  return gql`
      mutation MyMutation {
        delete_animals(where: {id: {${id}}}) {
          returning {
            id
          }
        }
      }`;
}

export default {
  SORT_ANIMALS,
  provideApolloClientFunction,
  ADD_ANIMAL,
  UPDATE_ANIMAL,
  DELETE_ANIMAL,
};
