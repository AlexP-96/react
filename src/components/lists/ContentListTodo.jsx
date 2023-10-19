import './ContentListTodo.css';

import {getIdToDo, getTextToDo, setHeaderToDo} from "../../actions/actions";
import {useDispatch} from "react-redux";
import {putChangeCheckedTodo} from "../../asyncActions/todos";

const ContentListTodo = ({idItem, header, text, check, wishlist, openWarning, showChange}) => {

    const dispatch = useDispatch();

    //клик по задаче для перевода задачи в состояние тру или фолс
    const checkedTodoDispatch = (e) => {
        dispatch(putChangeCheckedTodo(idItem, e.target.checked))
    }

    const openModalDelToDo = (e) => {
        openWarning(e);
        dispatch(getIdToDo(idItem));
        dispatch(getTextToDo(text));
    }

    const openModalChange = () => {
        showChange(true);
        dispatch(getIdToDo(idItem));
        dispatch(getTextToDo(text));
        dispatch(setHeaderToDo(header));
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
            <p className={`header__text__todo ${check ? 'text_decoration' : ''}`}>{header}</p>
            <p className={`text__todo ${check ? 'text_decoration' : ''}`} >{text}</p>
        </div>
        <div className="aside-todo-change">
            <div className="btn__todo__change"
                 data-id={idItem}
                 onClick={openModalChange}></div>
        </div>
        <div className='aside-todo-wishlist'>
            <input id={'check__wishlist__' + idItem}
                   className='check__wishlist'
                   type='checkbox'
                   defaultChecked={wishlist}/>
            <label htmlFor={'check__wishlist__' + idItem}
                   className='label__wishlist'
                   onClick={() => openModalDelToDo(true)}></label>
        </div>
    </div>);
};

export default ContentListTodo;
