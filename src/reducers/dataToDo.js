const SHOW_DATA = 'SHOW_DATA';
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = 'REMOVE_TODO';
const CHECKED_TODO = 'CHECKED_TODO';
const SET_ID = 'SET_ID';
const SET_TEXT = 'SET_TEXT';
const CHANGE_TODO = 'CHANGE_TODO';
const SET_HEADER = 'SET_HEADER';


const dataToDo = (state = {data: [], id: '', text: ''}, action) => {

    switch (action.type) {
        case SHOW_DATA:
            return {
                ...state,
                data: action.payload
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
        case SET_ID:
            return {
                ...state,
                id: String(state.data.filter(item => item.id === action.payload).map(item => item.id))
            }
        case SET_HEADER:
            return {
                ...state,
                header: String(state.data.filter(item => item.header === action.payload).map(item => item.header))
            }
        case SET_TEXT:
            return {
                ...state,
                text: String(state.data.filter(item => item.text === action.payload).map(item => item.text))
            }
        case CHANGE_TODO:
            return {
                ...state,
                data: state.data.map(item => item.id === action.payload.id ? {
                    id: action.payload.id,
                    header: action.payload.header,
                    text: action.payload.text
                } : {...item})
            }
        default:
            return state;
    }
}

export default dataToDo;