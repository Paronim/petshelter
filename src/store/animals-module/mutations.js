
import { computed } from "vue";

export function SET_ANIMALS_TO_STATE (state, result) {

  const animals = computed(() => result.value?.animals  ?? null);

  console.log(animals.value)

  state.animals = animals;
}
