import { createContext, useContext, useReducer } from 'react';

const makeStore = () => {
    const storeContext = createContext();
    const setStateContext = createContext();

    const useStore = () => useContext(storeContext);
    const useDispatch = () => useContext(setStateContext);

    const StoreProvider = ({ children, reducer, initState = {} }) => {
        const [state, dispatch] = useReducer(reducer, initState);

        return (
            <storeContext.Provider value={state}>
                <setStateContext.Provider value={dispatch}>{children}</setStateContext.Provider>
            </storeContext.Provider>
        );
    };

    return [StoreProvider, useStore, useDispatch];
};

export default makeStore;
