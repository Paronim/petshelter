import { computed } from "vue";

export function ANIMALS(state) {
  try {
    const animals = computed(() => {
      let modifiedVariableAge = "";
      let modifiedVariableSex = "";
      let modifiedVariableSterilization = "";

      let animalAuxiliAry = state.animals.map((animal) => {
        switch (true) {
          case animal.age === 1:
            modifiedVariableAge = animal.age + " месяц";
            break;
          case animal.age >= 2 && animal.age <= 4:
            modifiedVariableAge = animal.age + " месяца";
            break;
          case animal.age >= 5 && animal.age <= 11:
            modifiedVariableAge = animal.age + " месяцев";
            break;
          case animal.age === 12:
            modifiedVariableAge = animal.age / 12 + " год";
            break;
          case animal.age >= 24 && animal.age <= 48:
            modifiedVariableAge = animal.age / 12 + " года";
            break;
          case animal.age > 48:
            modifiedVariableAge = animal.age / 12 + " лет";
            break;
        }

        switch (true) {
          case animal.sex === true:
            modifiedVariableSex = "Мальчик";
            break;
          case animal.sex === false:
            modifiedVariableSex = "Девочка";
        }

        switch (true) {
          case animal.sterilization === true:
            modifiedVariableSterilization = "Есть";
            break;
          case animal.sterilization === false:
            modifiedVariableSterilization = "Нет";
        }

        const newAnimalObject = {
          id: animal.id,
          breed: animal.breed,
          info: animal.info,
          type: animal.type,
          age: modifiedVariableAge,
          image: animal.image,
          name: animal.name,
          sex: modifiedVariableSex,
          sterilization: modifiedVariableSterilization,
          updateOpen: true,
        };
        return newAnimalObject;
      });
      return animalAuxiliAry;
    });

    return animals.value;
  } catch (error) {
    console.log("Данные еще не пришли");
  }
}
