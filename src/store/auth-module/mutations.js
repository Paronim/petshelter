import { computed } from "vue";
export function SET_POSTS(state, result) {
  const posts = computed(() => result.value?.posts ?? null);
  state.posts = posts;
}
