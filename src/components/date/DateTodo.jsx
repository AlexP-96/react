import React from 'react';
import './Date.css';

const DateTodo = ({counttasck} ) => {

    const date = new Date();

//получение числа и месяца
    function getDay() {
        const getDay = date.getDate();
        const getMount = String(date.getMonth() + 1);
        let mount = '0';

        if (getMount.length < 2) {
            mount += getMount
        } else {
            mount = getMount
        }

        return `${getDay}.${mount}`

    }

//получение года
    function getYear() {
        const getYeart = date.getFullYear();
        return getYeart;
    }

//получение дня недели
    function getDayWeek() {
        const getDay = date.getDay();
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        let dayWeek = '';
        switch (getDay) {
            case 0:
                dayWeek = days[0]
                break;
            case 1:
                dayWeek = days[1]
                break;
            case 2:
                dayWeek = days[2]
                break;
            case 3:
                dayWeek = days[3]
                break;
            case 4:
                dayWeek = days[4]
                break;
            case 5:
                dayWeek = days[5]
                break;
            case 6:
                dayWeek = days[6];
                break;
        }
        return dayWeek

    }

    return (<div className="aside-date">
        <div className="aside-month">
            <div className="month">{getDay()}</div>
            <div className="year">{getYear()} год</div>
        </div>
        <div className="aside-day">
            <div className="day">{getDayWeek()}</div>
            <div className="all__task">Всего задач: {counttasck.length}</div>
        </div>
    </div>);
};

export default DateTodo;