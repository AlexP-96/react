import React from 'react';
import './BtnAddTodo.css';


const BtnAddTodo = ({showModal}) => {

    return (
        <div className="aside-add-todo">
            <button className="btn__add__todo"
                    onClick={() => showModal('block')}></button>
        </div>
    );
};

export default BtnAddTodo;