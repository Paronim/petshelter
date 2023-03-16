import gql from "graphql-tag";

function SORT_ANIMALS (typeSortVariable) {
return gql`
query MyQuery {
  animals(order_by: {id: desc}, where: {type: {${typeSortVariable}}}) {
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
    SORT_ANIMALS
  }
