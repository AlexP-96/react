import ModalAddTodo from "./components/modal/modal-add-todo/ModalAddTodo";
import WarningDel from "./components/modal/warnings/WarningDel";
import HeaderToDo from "./components/header/HeaderToDo";
import DateTodo from "./components/date/DateTodo";
import ContentListTodo from "./components/lists/ContentListTodo";
import BtnAddTodo from "./components/buttons/BtnAddTodo";
import {useDispatch, useSelector} from "react-redux";

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

    //стей на показ модального окна
    const [showModal, setShowModal] = useState('none');
    //стэйт на показ модального окна предупреждения
    const [showWarning, setShowWarning] = useState('none');

    //создание элементов туду
    const createTodo = (data) => {
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

    return (<div className="App">
        <div className="container">
            <HeaderToDo/>
            <DateTodo />
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
            />
        </div>
    </div>);
}

export default App;
