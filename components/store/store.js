import makeStore from './makeStore';

const [TodoProvider, useTodo, useSetTodo] = makeStore();
const [ThemeProvider, useTheme, useSetTheme] = makeStore();

export { TodoProvider, useTodo, useSetTodo };
export { ThemeProvider, useTheme, useSetTheme };
