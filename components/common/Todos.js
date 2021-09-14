import { useSetTodo } from '../store/store';
import TodoItem from './TodoItem';

const Todos = () => {
    const setTodos = useSetTodo();

    const createTodo = () => {
        setTodos((old) => [
            ...old,
            {
                name: 'Newly Created Todo',
                id: 'id Three',
            },
        ]);
    };

    const updateTodo = () => {
        setTodos((old) => {
            const update = old.map((todo) => {
                if (todo.id === 'id Two') {
                    return { ...todo, name: 'Updated Name' };
                }
                return todo;
            });
            return update;
        });
    };

    const deleteTodo = () => {
        setTodos((old) => {
            const update = old.filter((todo) => todo.id !== 'id One');
            return update;
        });
    };

    return (
        <div>
            <h3>Todos</h3>
            <button onClick={createTodo} type="button">
                Create Todo
            </button>
            <button onClick={updateTodo} type="button">
                Update Todo
            </button>
            <button onClick={deleteTodo} type="button">
                Delete Todo
            </button>
            <TodoItem />
        </div>
    );
};

export default Todos;
