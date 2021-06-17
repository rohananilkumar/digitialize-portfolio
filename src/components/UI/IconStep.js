import classes from './IconStep.module.css'
import {ReactSVG} from 'react-svg';

const IconStep = (props) => {
    return <span className={classes.step}>
        <ReactSVG src={props.svg}/>
        
        <div className={classes.step__text}>
            <strong>{props.header}.</strong>{props.children}
        </div>
    </span>
}  

export default IconStep;