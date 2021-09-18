import makeStore from './makeStore';

const [TodoProvider, useTodo, useDispatchTodo] = makeStore();
const [ThemeProvider, useTheme, useDispatchTheme] = makeStore();

export { TodoProvider, useTodo, useDispatchTodo };
export { ThemeProvider, useTheme, useDispatchTheme };
