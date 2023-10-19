import ModalAddTodo from "./components/modal/modal-add-todo/ModalAddTodo";
import WarningDel from "./components/modal/warnings/WarningDel";
import HeaderToDo from "./components/header/HeaderToDo";
import DateTodo from "./components/date/DateTodo";
import ContentListTodo from "./components/lists/ContentListTodo";
import BtnAddTodo from "./components/buttons/BtnAddTodo";
import ModalChangeToDo from "./components/modal/modal-change-todo/ModalChangeToDo";

import {useDispatch, useSelector} from "react-redux";

import './null.css';
import './App.css';

import {useEffect, useState} from "react";
import {fetchTodos} from "./asyncActions/todos";
import HeaderLogIn from "./components/header/HeaderLogIn";
import MainWindow from "./components/main-window/MainWindow";
import ModalLogin from "./components/modal/modal-login/ModalLogin";

export const dataSelector = (state) => state.dataTodo;

function App() {

    const dispatch = useDispatch();

    const dataToDo = useSelector(dataSelector).data;

    useEffect(() => {
        dispatch(fetchTodos({type: 'SHOW_DATA'}))
    }, []);

    //стей на показ модального окна
    const [showModal, setShowModal] = useState(false);
    //стэйт на показ модального окна предупреждения
    const [showWarning, setShowWarning] = useState(false);
    //стэйт на показ модального окна изменения записи
    const [showModalChange, setModalChange] = useState(false);

    const [showContentLogin, setContentLogin] = useState(false);

    //создание элементов туду
    const createTodo = (data) => {
        return data.map((item, index) => {
            return <ContentListTodo
                idItem={item.id}
                header={item.header}
                text={item.text}
                check={item.check}
                wishlist={item.wishlist}
                countTodo={index}
                openWarning={openModalWarning}
                showChange={openModalChange}
                key={index}/>
        })
    }
    //открытие-закрытие модального окна
    const openModalAddTodo = e => setShowModal(e);

    //открытие-закртыие окна предупрежения
    const openModalWarning = e => setShowWarning(e);

    //открытие закрытие-закрытие модалки изменения записи
    const openModalChange = e => setModalChange(e);

    const openModalLogin = e => setContentLogin(e);

    return (<div className="App">
        <div className="container">
            <div className="header">
                <DateTodo/>
                {/*<HeaderLogIn*/}
                    showModalLogin={openModalLogin}
                />
                <HeaderToDo/>
            </div>
            {/*{!showContentLogin && <MainWindow/>}*/}
            {/*{showContentLogin &&*/}
                <div className="aside-content-todo">
                    {createTodo(dataToDo)}
                </div>
            {/*}*/}

            <BtnAddTodo showModal={openModalAddTodo}/>

            {/*модалки*/}
            {showModal &&
                <ModalAddTodo
                showModal={openModalAddTodo}
            />}
            {showWarning &&
                <WarningDel
                showWarning={openModalWarning}
            />}
            {showModalChange &&
                <ModalChangeToDo
                showChange={openModalChange}
            />}
            {/*{showContentLogin &&*/}
            {/*    <ModalLogin*/}
            {/*    showModalLogin={openModalLogin}*/}
            {/*    />*/}
            {/*}*/}

        </div>
    </div>);
}

export default App;
