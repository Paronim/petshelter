import { computed } from "vue";
export function SET_USERS(state, result) {
  const users = computed(() => result.value?.users);
  state.users = users;
}
