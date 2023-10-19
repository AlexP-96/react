import {showToDo, addTodo, changeToDo, removeToDo, checkedToDo} from "../actions/actions";

const url = 'http://localhost:3000/posts';

export const fetchTodos = () => (dispatch) => {
    fetch(url)
        .then(res => res.json())
        .then(json => dispatch(showToDo(json)))
        .catch(error => alert(error))
}

export const postTodos = (todo) => async (dispatch) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(todo)
        })

        if (response.ok) {
            // cервер обычно возвращает запись которую сохранил
            const data = await response.json();

            dispatch(addTodo(data));
        }
    } catch (e) {
        // вывод ошибки
        alert(e)
    }
}
export const removeTodo = (id, header, text) => async (dispatch) => {
    try {
        const response = await fetch(url + '/' + id, {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                check: false,
                header: header,
                text: text,
                wishlist: false
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        if (response.ok) {
            const data = await response.json();
            dispatch(changeToDo(data.id, data.header, data.text))
        }

    } catch (e) {
        alert(e)
    }
}
export const deleteTodoServer = (id) => async (dispatch) => {
    try {
        const response = await fetch(url + '/' + id, {
            method: 'DELETE'
        })
        if (response.ok) {
            dispatch(removeToDo(id));
        }
    } catch (e) {
        alert(e)
    }
}

export const putChangeCheckedTodo = (id, check) => async (dispatch) => {
    try {
        const response = await fetch(url + '/' + id,
            {
                method: 'PATCH',
                headers: {'Content-Type': "application/json; charset=UTF-8"},
                body: JSON.stringify({check})
            })
        if (response.ok) {
            dispatch(checkedToDo(id, check))
        }
    } catch (e) {
        alert(e)
    }
}