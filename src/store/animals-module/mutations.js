
import { computed, ref } from "vue";

export function SET_ANIMALS_TO_STATE (state, result) {

  const animals = computed(() => result.value?.animals  ?? null);

  state.animals = animals;
}
