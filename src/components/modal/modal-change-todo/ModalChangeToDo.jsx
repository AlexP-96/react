import React, {useState} from 'react';

import './ModalChangeToDo.css';
import {useDispatch, useSelector} from "react-redux";
import {removeTodo} from "../../../asyncActions/todos";

const dataSelector = (state) => state.dataTodo;

const ModalChangeToDo = ({showChange}) => {

    const dispatch = useDispatch();

    const dataToDo = useSelector(dataSelector);

    const [valueHeader, setValueHeader] = useState(dataToDo.header);
    const [valueText, setValueText] = useState(dataToDo.text);

    const changeHeaderTodo = (e) => {
        setValueHeader(e.target.value);
    }
    const changeTextTodo = e => {
        setValueText(e.target.value);
    }

    const modifyTodo = () => {
        dispatch(removeTodo(dataToDo.id, valueHeader, valueText))
        showChange(false);
    }

    return (<div className='aside-modal-change-todo'>
            <div className="modal-change-todo">
                <div className="header__change__modal">Изменение записи</div>
                <div className="aside-content-changed-todo">
                    <p className="descr__text__change">Название:</p>
                    <input type="text"
                           className="header__changed__todo"
                           value={valueHeader}
                           onChange={changeHeaderTodo}/>
                    <p className="descr__text__change">Описание:</p>
                    <textarea type="text"
                              className="text__changed__todo"
                              value={valueText}
                              onChange={changeTextTodo}></textarea>
                </div>
                <div className="aside-btns-change-modal">
                    <input type="button"
                           className="btn__change btn__change_cancel"
                           value='Отмена'
                           onClick={() => showChange(false)}/>
                    <input type="button"
                           className="btn__change btn__change_apply"
                           value='Изменить'
                           onClick={modifyTodo}/>
                </div>
            </div>
        </div>)
};

export default ModalChangeToDo;