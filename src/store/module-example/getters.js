// export function someGetter (/* state */) {
export function doneTodos(state){
      return state.usrInfo.filter(todo => todo.done);
    }
export function  doneTodosCount (state, getters){
      return getters.doneTodos.length
    }
export function  getTodoById (state){
      return state.usrInfo.find(todo => todo.id === id)
    }

