import { useState } from 'react';

export default function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);

        return persistedState ? JSON.parse(persistedState) : defaultValue;
    });

    const setPersistedState = (value) => {
        setState(prevState => {
            const newState = typeof value === 'function' ? value(prevState) : value;

            if (!newState || Object.keys(newState).length === 0) {
                localStorage.removeItem(key);
            } else {
                localStorage.setItem(key, JSON.stringify(newState));
            }

            return newState;
        });
    };

    return [state, setPersistedState];
}
