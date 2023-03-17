
import { computed } from "vue";

export function ANIMALS (state) {

  // const animals = computed(() => {
  //     state.animals.map((animal) => {

  //       console.log(animal)

  //       // console.log(Object.getOwnPropertyDescriptor(animal, "age"))

  //       function defPropAnimal (age) {
  //         Object.defineProperty(animal, "age", {
  //           writable: true,
  //           configurable: true,
  //           value: age
  //           })
  //       }

  //         switch(true){
  //           case animal.age == 1:
  //             '1 месяц'
  //             break;
  //           // case animal.age >= 2 && animal.age <= 4:
  //           //   animal.age += ' месяца'
  //           //   break;
  //           // case animal.age >= 5 && animal.age <=12:
  //           //   animal.age += ' месяцев'
  //           //   break;
  //           // case 4:
  //           //   animal.age += ' месяц'
  //           //   break;
  //           // case 1:
  //           //   animal.age += ' месяц'
  //           //   break;
  //           // case 1:
  //           //   animal.age += ' месяц'
  //           //   break;
  //           // case 1:
  //           //   animal.age += ' месяц'
  //           //   break;

  //       }

  //     }
  //     )
  //   }
  // )
  //   console.log(animals.value)
    return state.animals
}
