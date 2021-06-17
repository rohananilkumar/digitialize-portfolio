import { ReactSVG } from 'react-svg';
import classes from './ProcessItem.module.css';

const ProcessItem = (props) => {
    return <div className={classes.process__item} style={{backgroundColor:props.backgroundColor}}>
        <div className={classes.process__item__number}>
            {props.number}
        </div>
        <ReactSVG src={props.svg} className={classes.process__item__svg}/>
        <header className={classes.process__item__header}>
            {props.header}
        </header>
        <summary className={classes.process__item__summary}>
            {props.summary}
        </summary>

        
    </div>
}

export default ProcessItem;