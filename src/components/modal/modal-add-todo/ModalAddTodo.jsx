import './ModalAddTodo.css';

import {useState} from "react";
import {useDispatch} from "react-redux";
import {postTodos} from "../../../asyncActions/todos";

const ModalAddTodo = ({showModal}) => {

    const dispatch = useDispatch();
    //стэйт для добавления заголовка
    const [headerContent, setHeaderContent] = useState('');
    //стэйт для добавления вводимого текста в редуктор
    const [content, setContent] = useState('');

    //добавление нового поста
    const dispatchToDo = () => {
        if (content === '') {
            alert('Поле описания не должно быть пустым')
        } else if (headerContent === '') {
            dispatch(postTodos({header: content, check: false, text: '', wishlist: false}));
            setContent('');
            setHeaderContent('');
            showModal(false);
        } else {
            dispatch(postTodos({
                header: headerContent, check: false, text: content, wishlist: false
            }));
            setContent('');
            setHeaderContent('');
            showModal(false);
        }
    }

    const getHeaderContentTodo = e => setHeaderContent(e.target.value)
    //запись вводимых данных в локальный стэйт
    const getContentTodo = e => setContent(e.target.value)

    return (<div className='container-modal-add-todo'>
        <div className="modal-add-todo">
            <div className='form-todo'>
                <h3 className="header__add__todo">Добавление</h3>
                <input type="text"
                       placeholder={"Название"}
                       value={headerContent}
                       onChange={getHeaderContentTodo}
                       className="input__header__add__todo"/>
                <input
                    type='text'
                    className='textarea__todo__add'
                    placeholder='Описание'
                    onChange={getContentTodo}
                    value={content}/>
                <div className="aside-btn-add-todo">
                    <input
                        className="btn__add__todo__modal btn_cancel"
                        type='button'
                        value='Отмена'
                        onClick={() => showModal(false)}/>
                    <input
                        className="btn__add__todo__modal"
                        type='button'
                        onClick={dispatchToDo}
                        value='Добавить'/>
                </div>

            </div>
        </div>
    </div>);
};

export default ModalAddTodo;