import uuid from "react-uuid";

import './ModalAddTodo.css';

import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../../actions/actions";


const ModalAddTodo = ({showModal, closeModal}) => {

    const dispatch = useDispatch();

    const [content, setContent] = useState('');

    //добавление нового поста
    const dispatchToDo = () => {

        if (content === '') {
            alert('Поле не должно быть пустым')
        } else {
            dispatch(addTodo({id: uuid(), check: false, text: content, wishlist: false}))
            setContent('');
            closeModal();
        }
    }

    //запись вводимых данных в локальный стэйт
    const getContentTodo = (e) => {
        setContent(e.target.value)
    }

    return (<div className='container-modal-add-todo'
                 style={{display: showModal}}>
        <div className="modal-add-todo">
            <div className='form-todo'>
                    <textarea
                        name="add__todo"
                        id="add__todo"
                        className='textarea__todo__add'
                        onChange={getContentTodo}
                        value={content}></textarea>
                <input
                    className="btn__add__todo__modal"
                    type='button'
                    onClick={dispatchToDo}
                    value='Добавить'/>
                <div className="close__add__todo"
                     onClick={() => closeModal('none')}>✕
                </div>
            </div>
        </div>
    </div>);
};

export default ModalAddTodo;