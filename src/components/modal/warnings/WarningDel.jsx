import './WarningDel.css';
import {useDispatch, useSelector} from "react-redux";
import {removeToDo} from "../../../actions/actions";

const dataSelector = (state) => state.dataTodo;

const WarningDel = ({showWarning}) => {

    const dispatch = useDispatch();

    //получение id из стэйта для удаления этого туду
    const setId = useSelector(dataSelector).id;
    //получение текста из тудушки
    const setText = useSelector(dataSelector).text;
    //удаление тудушки из списка
    const deleteTodo = (e) => {
        dispatch(removeToDo(e.target.dataset.id));
        showWarning(false);
    }

    return (<div className="warning-del">
        <div className="aside-content-warning-del">
            <div className="aside-text-warning-del">Вы дейстивительно хотите удалить данную запись?</div>
            <div className="text-warning">Удалить запись:
                <div className="changed_text_del"> '{setText}'</div>
            </div>
            <div className="aside-btn-warning-del">
                <button
                    className="warn-del-no"
                    onClick={() => showWarning(false)}>НЕТ
                </button>
                <button className="warn-del-yes"
                        data-id={setId}
                        onClick={deleteTodo}>ДА
                </button>
            </div>
        </div>
    </div>);
};

export default WarningDel;