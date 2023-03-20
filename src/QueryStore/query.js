import gql from "graphql-tag";
import { ApolloClient } from '@apollo/client/core'
import { getClientOptions } from 'src/apollo/index';
import { provideApolloClient } from "@vue/apollo-composable";
import { useMutation } from "@vue/apollo-composable";

const apolloClient = new ApolloClient(getClientOptions())

export function provideApolloClientFunction () {

  provideApolloClient(apolloClient);
}

function SORT_ANIMALS (typeSortVariable, ageSortVariable, sexSortVariable, sterilizationSortVariable) {
return gql`
query MyQuery {
  animals(order_by: {id: desc}, where: { sex: {${sexSortVariable}}, sterilization: {${sterilizationSortVariable}}, type: {${typeSortVariable}}, _and: {age: {${ageSortVariable}}}}) {
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

export function ADD_ANIMALS_ADMIN_PANEL(age, breed, info, name, sex, sterilization, type) {

  console.log(sex)
  console.log(sterilization)


  const {mutate: addAnimal} = useMutation(gql`
      mutation AddNewAnimal ($age: Int, $breed: String, $image: String, $info: String, $name: name, $sex: Boolean, $sterilization: Boolean, $type: String){
        insert_animals_one(object: {age: $age, breed: $breed, image: $image, info: $info, name: $name, sex: $sex, sterilization: $sterilization, type: $type}){
          age
          breed
          image
          info
          name
          sex
          sterilization
          type
    }
    }
    `, ()=>({
      variables:{
        age: age,
        breed: breed,
        image: '',
        info: info,
        name: name,
        sex: sex,
        sterilization: sterilization,
        type: type
      }
      })
  )
      addAnimal()

}


  export default {
    SORT_ANIMALS,
    ADD_ANIMALS_ADMIN_PANEL
  }
