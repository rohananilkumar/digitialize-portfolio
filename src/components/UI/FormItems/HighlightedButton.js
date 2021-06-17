import classes from './HightlightedButton.module.css';

const HightlightedButton = (props) =>{
    return <button className={`${classes.button} ${props.className??''}`} onClick={props.onClick}>
        {props.children}
    </button>
}

export default HightlightedButton;