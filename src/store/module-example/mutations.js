import state from './state'
import {computed} from 'vue';

export function SET_POSTS (state, result) {
  const requests = computed(()=>result.value?.requests ?? null);
  state.requests = requests;
}
export function shareAvatarName(state, payload) {
  state.avatarName = payload
}
