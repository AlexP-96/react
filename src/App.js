import ModalAddTodo from "./components/modal/modal-add-todo/ModalAddTodo";
import WarningDel from "./components/modal/warnings/WarningDel";
import HeaderToDo from "./components/header/HeaderToDo";
import DateTodo from "./components/date/DateTodo";
import ContentListTodo from "./components/lists/ContentListTodo";
import BtnAddTodo from "./components/buttons/BtnAddTodo";

import './null.css';

import './App.css';

import {useState} from "react";

function App() {

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
    //стэйт на текст элемента туду для отрисовки в моадльном окне предупреждения
    const [textTodo, setTextTodo] = useState('');

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
                checkDelete={delListToDo}
                openWarning={openWarning}
                checkTodo={checkComplete}
                countTodo={index}
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
    const openWarning = (e, id, text) => {
        setShowWarning(e);
        setToDoId(id);
        setTextTodo(text)
    }
    //закрытие окна предупреждения
    const closeWarning = (e) => {
        setShowWarning(e)
    }

    //добавление новой задачи туду
    const addToDo = (content) => {

        const getDate = new Date();

        let randomId = getDate.getMilliseconds() + Math.random();

        const objectToDo = {
            id: randomId, check: false, text: content, wishlist: false
        }
        if (content === '') {
            alert('Поле не должно быть пустым.')
        } else {
            setTodo([...todo, objectToDo]);
            setShowModal('none');
        }
    }

    // удаление элемента из стэйта todo
    const delListToDo = (id) => {
        setTodo(todo.filter(item => item.id !== id));
        closeWarning('none');
    }

    // установка тру или фолс на элемент чекед
    const checkComplete = (value) => {
        setTodo(todo.map(item => (item.id === value ? {...item, check: !item.check} : {...item})));
    }

    return (<div className="App">
        <div className="container">
            <HeaderToDo/>
            <DateTodo counttasck={todo}/>
            <div className="aside-content-todo">
                {createTodo(todo)}
            </div>

            <BtnAddTodo showModal={openModalAddTodo}/>
            <ModalAddTodo
                showModal={showModal}
                closeModal={closeModal}
                addTodo={addToDo}
            />

            <WarningDel
                showWarning={showWarning}
                closeWarning={closeWarning}
                deleteTodo={delListToDo}
                todoId={todoId}
                textTodo={textTodo}
            />
        </div>
    </div>);
}

export default App;
