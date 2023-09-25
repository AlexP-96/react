import './ContentListTodo.css';

import {checkedToDo} from "../../actions/actions";
import {useDispatch} from "react-redux";

const ContentListTodo = ({idItem, text, check, wishlist, countTodo, openWarning}) => {

    const dispatch = useDispatch();

    const checkedTodoDispatch = (e) => {

        let Id = e.target.dataset.id;
        let Check = Boolean(e.target.dataset.checked);
        dispatch(checkedToDo(Id, Check))
    }

    const openModalDelToDo = (e) => {
        openWarning(e);
    }

    return (<div className="aside-todo-list">
        <div className='checkbox-todo'>
            <div className="count__todo">{countTodo + 1}</div>
            <input id={'check__input__' + idItem}
                   className='check__input'
                   type='checkbox'
                   defaultChecked={check}
                   data-checked={check}
                   onChange={(e) => {checkedTodoDispatch(idItem, e.target.checked)}}/>
            <label htmlFor={'check__input__' + idItem}
                   data-id={idItem}
                   className='label__todo'
            ></label>
        </div>
        <div className='aside-text-content-todo'
        >
            <p className={`text__todo ${check ? 'text_decoration' : ''}`} data-id={idItem}>{text}</p>

        </div>
        <div className='aside-todo-wishlist'>
            <input id={'check__wishlist__' + idItem}
                   className='check__wishlist'
                   type='checkbox'
                   defaultChecked={wishlist}/>
            <label htmlFor={'check__wishlist__' + idItem}
                   className='label__wishlist'
                   data-id={idItem}
                   onClick={() => openModalDelToDo('block')}>✖</label>
        </div>
    </div>);
};

export default ContentListTodo;
