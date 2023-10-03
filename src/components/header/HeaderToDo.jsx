import React from 'react';

import './Header.css'
import {useSelector} from "react-redux";
const quantitySelector = (state) => state.dataTodo.data.length

const HeaderToDo = () => {
    const quantityToDo = useSelector(quantitySelector)

    return (
        <div className='aside-header'>
            <h1 className="title-todo">ЗАМЕТКИ</h1>
            <div className="aside-day">
                <div className="all__task">Всего задач: {quantityToDo}</div>
            </div>
        </div>
    );
};

export default HeaderToDo;