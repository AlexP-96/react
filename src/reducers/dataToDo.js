const SHOW_DATA = 'SHOW_DATA';
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = 'REMOVE_TODO';
const CHECKED_TODO = 'CHECKED_TODO';
const GET_ID = 'GET_ID';
const GET_TEXT = 'GET_TEXT';

const dataToDo = (state = {data: [], id: '', text: ''}, action) => {

    switch (action.type) {
        case SHOW_DATA:
            return {
                ...state,
                data: [
                    {id: '999', check: false, text: 'Первая тестовая запись', wishlist: false}
                ]
            }
        case ADD_TODO:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case REMOVE_TODO:
            return {
                ...state,
                data: state.data.filter(item => item.id !== action.payload)
            }
        case CHECKED_TODO:
            return {
                ...state,
                data: state.data.map(item => (item.id === action.payload.id ? {
                    ...item,
                    check: action.payload.check
                } : {...item}))
            }
        case GET_ID:
            return {
                ...state,
                id: String(state.data.filter(item => item.id === action.payload).map(item => item.id))
            }
        case GET_TEXT:
            return {
                ...state,
                text: String(state.data.filter(item => item.text === action.payload).map(item => item.text))
            }
        default:
            return state;
    }
}

export default dataToDo;