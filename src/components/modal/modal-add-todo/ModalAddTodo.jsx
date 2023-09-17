import './ModalAddTodo.css';
import {useState} from "react";

const ModalAddTodo = ({showModal, closeModal, addTodo}) => {

    const [content, setContent] = useState('');

    const getContentTodo = (e) => {
        setContent(e.target.value)
    }

    return (
        <div className='container-modal-add-todo'
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
                        onClick={() => addTodo(content, setContent(''))}
                        value='Cоздать'/>
                    <div className="close__add__todo"
                         onClick={() => closeModal('none', setContent(''))}>✕
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalAddTodo;