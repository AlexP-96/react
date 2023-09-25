const dataTodo = [{id: 1, check: false, text: 'Первая тестовая запись', wishlist: false}];

const SHOW_DATA = 'SHOW_DATA';

const reduceAddToData = (state = dataTodo, action) => {

    switch (action.type) {
        case SHOW_DATA:
            return {
                ...state,
                data: state.map(item => {
                    return {
                        id: item.id,
                        check: item.check,
                        text: item.text,
                        wishlist: item.wishlist
                    }
                }),

            };
        default:
            return state;
    }
}

export default reduceAddToData;