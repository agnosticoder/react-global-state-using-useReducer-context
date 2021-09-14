import { createContext, useContext, useState } from 'react';

const makeStore = () => {
    const storeContext = createContext();
    const setStateContext = createContext();

    const useStore = () => useContext(storeContext);
    const useSetState = () => useContext(setStateContext);

    const StoreProvider = ({ children, initState = {} }) => {
        const [state, setState] = useState(initState);

        return (
            <storeContext.Provider value={state}>
                <setStateContext.Provider value={setState}>{children}</setStateContext.Provider>
            </storeContext.Provider>
        );
    };

    return [StoreProvider, useStore, useSetState];
};

export default makeStore;
