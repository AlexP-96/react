export const addTodo = (payload) => ({type: 'ADD_TODO', payload});
export const removeToDo = (id) => ({type: 'REMOVE_TODO', payload: id});
export const checkedToDo = (id, check) => ({type: "CHECKED_TODO", payload: {id, check}});
export const getIdToDo = (payload) => ({type: 'SET_ID', payload});
export const setHeaderToDo = (payload) => ({type: 'SET_HEADER', payload});
export const getTextToDo = (payload) => ({type: 'SET_TEXT', payload});
export const changeToDo = (id, header, text) => ({type: 'CHANGE_TODO', payload: {id, header, text}});