import { useContext } from 'react';
import { buttonTheme } from './Static.jsx';

const ThemeButton = (props) => {
    const uc = useContext(buttonTheme);

    return (
        <button {...props} style={{backgroundColor: uc.background}}>click</button>
    );
}

export default ThemeButton; 