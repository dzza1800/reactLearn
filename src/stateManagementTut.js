import { useState } from 'react';
import {buttonTheme, themes} from './Static.jsx';
import Tb from './toolbar.jsx';

const HomePage = () => {
    const [theme, setTheme] = useState(themes.blue);

    const checkTheme = () =>{
        if(theme === themes.gray){
            setTheme(themes.blue);
        }
        else{
            setTheme(themes.gray);
        }
    }


    return(
        <buttonTheme.Provider value = {theme}>
            <Tb themeButton={checkTheme} />
        </buttonTheme.Provider>
    );
}

export default HomePage;