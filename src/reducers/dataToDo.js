const SHOW_DATA = 'SHOW_DATA';
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = 'REMOVE_TODO';
const CHECKED_TODO = 'CHECKED_TODO';

const dataToDo = (state = {data: []}, action) => {

    switch (action.type) {
        case SHOW_DATA:
            return {
                ...state,
                data: [
                    {id: 999, check: false, text: 'Первая тестовая запись', wishlist: false}
                ]
            };
        case ADD_TODO:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case REMOVE_TODO:
            return {
                ...state,
                data: [...state.data, action.payload.filter(item => item.id !== action)]
            }
        case CHECKED_TODO:
            return {
                ...state,
                data: state.data.map(item => (item.id === action.payload.id ? {
                    ...item,
                    check: action.payload.check
                } : {...item}))

            }
        default:
            return state;
    }
}

export default dataToDo;