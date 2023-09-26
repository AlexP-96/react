export const addTodo = (payload) => ({type: 'ADD_TODO', payload});
export const removeToDo = (id) => ({type: 'REMOVE_TODO', payload: id});
export const checkedToDo = (id, check) => ({type: "CHECKED_TODO", payload: {id, check}});
export const getIdToDo = (payload) => ({type: 'GET_ID', payload});

