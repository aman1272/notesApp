import { deleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const Todo = ({ todo, date, id }) => {
    const dispatch = useDispatch();

    return (
        <div className="card" key={id} >
            <div className="container">
                <p>{todo}</p>
            </div>
            <div  >
                <span>{date}</span>
                <span className="icon" onClick={() => dispatch(deleteTodo(id))}>
                    <i className="fas fa-trash" />
                </span>
            </div>
        </div>
    )
}

export default Todo;