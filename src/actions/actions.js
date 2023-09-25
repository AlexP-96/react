export const addTodo = (payload) => ({type: 'ADD_TODO', payload});
export const checkedToDo = (id, check) => ({type: "CHECKED_TODO", payload: {id, check   }})

