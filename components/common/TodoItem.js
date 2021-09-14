import { useTodo } from '../store/store';

const TodoItem = () => {
    const todos = useTodo();

    // console.log(todos);

    return (
        <div>
            <h3>TodosItem</h3>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <ul>{todo.name}</ul>
                </div>
            ))}
        </div>
    );
};

export default TodoItem;
