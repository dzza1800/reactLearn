import ThemeBut from "./ThemeComponent";

const toolbar = (props) => {
    return <ThemeBut onClick={props.themeButton}>theme</ThemeBut>

}
//calling the themebutton class and giving it, it's functionality of being, when clicked do this
export default toolbar;