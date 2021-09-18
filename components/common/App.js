import { TodoProvider } from '../store/store';
import Todos from './Todos';

const initState = [
    {
        name: 'Todo One',
        id: 'id One',
    },
    {
        name: 'Todo Two',
        id: 'id Two',
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_TODO':
            return [...state, { ...action.payload }];

        case 'UPDATE_TODO': {
            const update = state.map((todo) => {
                if (todo.id === 'id Two') {
                    return { ...todo, ...action.payload };
                }
                return todo;
            });
            return update;
        }

        case 'DELETE_TODO': {
            return state.filter((todo) => todo.id !== 'id One');
        }

        default:
            return state;
    }
};

const App = () => {
    const name = 'Satinder';

    return (
        <TodoProvider reducer={reducer} initState={initState}>
            <h2>Maintaining Global State with useReducer ans context! 🤯</h2>
            <div>
                <Todos />
            </div>
        </TodoProvider>
    );
};

export default App;
