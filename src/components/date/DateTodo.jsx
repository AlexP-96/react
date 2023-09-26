import React from 'react';
import './Date.css';

const DateTodo = () => {


    const date = new Date();

//получение числа и месяца
    function getDay() {
        const dayNumber = date.getDate();
        const getMount = String(date.getMonth() + 1);
        let mount = '0';

        if (getMount.length < 2) {
            mount += getMount
        } else {
            mount = getMount
        }
        return `${dayNumber}.${mount}`;
    }

//получение года
    function getYear() {
        return date.getFullYear();
    }

//получение дня недели
    function getDayWeek() {
        const getDay = date.getDay();
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return days[getDay];
    }

    return (<div className="aside-date">
        <div className="aside-month">
            <div className="month">{getDay()}</div>
            <div className="day">{getDayWeek()}</div>
            <div className="year">{getYear()} год</div>
        </div>

    </div>);
};

export default DateTodo;