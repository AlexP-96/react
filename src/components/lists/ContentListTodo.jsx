import './ContentListTodo.css';

import {checkedToDo, getIdToDo, getTextToDo} from "../../actions/actions";
import {useDispatch} from "react-redux";

const ContentListTodo = ({idItem, text, check, wishlist, openWarning}) => {

    const dispatch = useDispatch();

    //клик по задаче для перевода задачи в состояние тру или фолс
    const checkedTodoDispatch = (e) => {
        dispatch(checkedToDo(idItem, e.target.checked));
    }

    const openModalDelToDo = (e) => {
        openWarning(e);
        dispatch(getIdToDo(idItem));
        dispatch(getTextToDo(text));
    }

    return (<div className="aside-todo-list">
        <div className='checkbox-todo'>
            <div className="count__todo"></div>
            <input id={'check__input__' + idItem}
                   className='check__input'
                   type='checkbox'
                   defaultChecked={check}
                   checked={check}
                   data-id={idItem}
                   onChange={checkedTodoDispatch}/>
            <label htmlFor={'check__input__' + idItem}
                   data-id={idItem}
                   className='label__todo'
            ></label>
        </div>
        <div className='aside-text-content-todo'>
            <p className={`text__todo ${check ? 'text_decoration' : ''}`} >{text}</p>
        </div>
        <div className='aside-todo-wishlist'>
            <input id={'check__wishlist__' + idItem}
                   className='check__wishlist'
                   type='checkbox'
                   defaultChecked={wishlist}/>
            <label htmlFor={'check__wishlist__' + idItem}
                   className='label__wishlist'
                   onClick={() => openModalDelToDo('block')}></label>
        </div>
    </div>);
};

export default ContentListTodo;
