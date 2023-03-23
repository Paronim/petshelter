import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import auth2_0 from "./module-example";
import ws from "./ws-module";
import animals from "./animals-module";

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      auth2_0,
      animals,
      ws,
    },
    strict: false,
  });

  return Store;
});
