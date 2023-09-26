import './WarningDel.css';
import {useDispatch, useSelector} from "react-redux";
import {removeToDo} from "../../../actions/actions";

const dataSelector = (state) => state.dataTodo;


const WarningDel = ({closeWarning, showWarning}) => {

    const dispatch = useDispatch();

    //получение id из стэйта для удаления этого туду
    const getId = useSelector(dataSelector).id;
    //удаление тудушки из списка
    const deleteTodo = (e) => {
        dispatch(removeToDo(e.target.dataset.id));
        closeWarning('none');
    }

    return (<div className="warning-del" style={{display: showWarning}}>
        <div className="aside-content-warning-del">
            <div className="aside-text-warning-del">Вы дейстивительно хотите удалить данную запись?</div>
            <div className="text-warning">Удалить запись:
                <div className="changed_text_del"></div>
            </div>
            <div className="aside-btn-warning-del">
                <button className="warn-del-yes"
                        data-id={getId}
                        onClick={deleteTodo}>ДА
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