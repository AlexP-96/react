import React from 'react';

import './WarningDel.css';

const WarningDel = ({showWarning, closeWarning, deleteTodo, todoId, textTodo}) => {

    return (<div className="warning-del" style={{display: showWarning}}>
        <div className="aside-content-warning-del">
            <div className="aside-text-warning-del">Вы дейстивительно хотите удалить данную запись?</div>
            <div className="text-warning">Удалить запись: <div className="changed_text_del">{textTodo}</div> </div>
            <div className="aside-btn-warning-del">
                <button className="warn-del-yes"
                        data-id={todoId}
                        onClick={() => deleteTodo(todoId)}>ДА
                </button>
                <button
                    className="warn-del-no"
                    onClick={() => closeWarning('none')}>НЕТ
                </button>
            </div>
        </div>
    </div>);
};

export default WarningDel;