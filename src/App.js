import ModalAddTodo from "./components/modal/modal-add-todo/ModalAddTodo";
import WarningDel from "./components/modal/warnings/WarningDel";
import HeaderToDo from "./components/header/HeaderToDo";
import DateTodo from "./components/date/DateTodo";
import ContentListTodo from "./components/lists/ContentListTodo";
import BtnAddTodo from "./components/buttons/BtnAddTodo";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "./actions/actions";

import './null.css';
import './App.css';

import {useEffect, useState} from "react";

const dataSelector = (state) => state.dataTodo;

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'SHOW_DATA'})
    }, [])

    const dataToDo = useSelector(dataSelector);

    //получение локальных туду
    let localData = JSON.parse(localStorage.getItem('todoList'));

    //значение по умолчанию
    const dataTodo = [{id: 1, check: false, text: 'Первая тестовая запись', wishlist: false}];

    //проверка на наличие данных в локальном хранилище
    if (localData === null || localData === undefined || localData.length === 0) {
        localData = dataTodo;
    }
    //стэйт на отрисову тудушек
    const [todo, setTodo] = useState(localData);
    //стей на показ модального окна
    const [showModal, setShowModal] = useState('none');
    //стэйт на показ модального окна предупреждения
    const [showWarning, setShowWarning] = useState('none');
    //стэйт на id элемента туду для модального окна
    const [todoId, setToDoId] = useState('');

    //создание элементов туду
    const createTodo = (data) => {

        //создание туду листов в локальном хранилище
        localStorage.setItem('todoList', JSON.stringify(todo));

        return data.map((item, index) => {
            return <ContentListTodo
                idItem={item.id}
                text={item.text}
                check={item.check}
                wishlist={item.wishlist}
                countTodo={index}
                openWarning={openModalWarning}
                key={index}/>
        })
    }
    //открытие модального окна
    const openModalAddTodo = (e) => {
        setShowModal(e)
    }
    //закрытие модального окна
    const closeModal = (e) => {
        setShowModal(e)
    }
    //открытие окна предупрежения

    const openModalWarning = (e) => {
        setShowWarning(e)
    }

    //закрытие окна предупреждения
    const closeWarning = (e) => {
        setShowWarning(e)
    }

    // удаление элемента из стэйта todo
    const delListToDo = (id) => {
        setTodo(todo.filter(item => item.id !== id));
        closeWarning('none');
    }

    // установка тру или фолс на элемент чекед
    const checkComplete = (value) => {
        addTodo.map(item => (item.id === value ? {...item, check: !item.check} : {...item}));
    }

    return (<div className="App">
        <div className="container">
            <HeaderToDo/>
            <DateTodo counttasck={todo}/>
            <div className="aside-content-todo">
                {createTodo(dataToDo.data)}
            </div>

            <BtnAddTodo showModal={openModalAddTodo}/>
            <ModalAddTodo
                showModal={showModal}
                closeModal={closeModal}
            />

            <WarningDel
                showWarning={showWarning}
                closeWarning={closeWarning}
                deleteTodo={delListToDo}
                todoId={todoId}
            />
        </div>
    </div>);
}

export default App;
