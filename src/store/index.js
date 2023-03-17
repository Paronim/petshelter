import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import auth2_0 from './module-example'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      auth2_0,
    },
    strict: process.env.DEBUGGING
  })

  return Store
})
