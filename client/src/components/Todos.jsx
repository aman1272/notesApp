import { useEffect } from 'react';
import { getAllTodos } from '../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
// component
import Todo from './Todo';
export const Todos = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const totalData = todos.length

    useEffect(() => {
        dispatch(getAllTodos())
    }, [totalData])


    return (
        <div className='parentDiv' >

            {(!totalData) ? (<h1>Loading ...</h1>)
                : todos.map(data => (
                    <Todo
                        key={data.id}
                        id={data.id}
                        todo={data.todo}
                        date={data?.created}
                    />
                ))}
        </div>
    )
}

export default Todos;
