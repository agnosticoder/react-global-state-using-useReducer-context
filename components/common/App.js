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

const App = () => {
    const name = 'Satinder';

    return (
        <TodoProvider initState={initState}>
            <h2>Maintaining Global State with useState and context! 🤯</h2>
            <div>
                <Todos />
            </div>
        </TodoProvider>
    );
};

export default App;
