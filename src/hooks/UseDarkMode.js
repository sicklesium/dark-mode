import { useEffect } from 'react';
import UseLocalStorage from './UseLocalStorage';

const UseDarkMode = (key, initialValue) => {
    const [value, setValue] = UseLocalStorage(key, initialValue);

    useEffect(() => {
        if (value === true) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        };
    }, [value])

    return [value, setValue]
}

export default UseDarkMode;