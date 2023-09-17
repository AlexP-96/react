import './ContentListTodo.css';

const ContentListTodo = ({idItem, text, check, wishlist, openWarning, checkTodo, countTodo}) => {

    return (
        <div className="aside-todo-list">
            <div className='checkbox-todo'>
                <div className="count__todo">{countTodo + 1}</div>
                <input id={'check__input__' + idItem}
                       className='check__input'
                       type='checkbox'
                       defaultChecked={check}/>
                <label htmlFor={'check__input__' + idItem}
                       className='label__todo'
                       onClick={() => checkTodo(idItem)}></label>
            </div>
            <div className='aside-text-content-todo'>
                <p className={`text__todo ${check ? 'text_decoration' : ''}`}>{text}</p>
            </div>
            <div className='aside-todo-wishlist'>
                <input id={'check__wishlist__' + idItem}
                       className='check__wishlist'
                       type='checkbox'
                       defaultChecked={wishlist}/>
                <label htmlFor={'check__wishlist__' + idItem}
                       className='label__wishlist'
                       data-id={idItem}
                       onClick={() => openWarning('block', idItem, text)}>✖</label>
            </div>
        </div>
    );
};

export default ContentListTodo;
