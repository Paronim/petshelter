import gql from "graphql-tag";

const animalsDefault = gql`
query MyQuery {
  animals(order_by: {id: desc}) {
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

const sortCat = gql`
query MyQuery {
  animals(order_by: {id: desc}, where: {type: {_like: "кот"}}) {
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

const sortDog =gql`
query MyQuery {
  animals(order_by: {id: desc}, where: {type: {_like: "собака"}}) {
    id
    breed
    info
    type
    age
    image
    name
    sex
    sterilization
  }
}
  `

  export default {
    sortCat,
    sortDog,
    animalsDefault
  }
