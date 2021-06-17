import classes from './CardSteps.module.css';

const CardSteps = (props) =>{
    return <section className={classes.card} onFocus={props.onFocus} onBlur={props.onBlur}>
        <div className={classes.step__number}>
            {props.number}
        </div>
        <div className={classes.data}>
            <header className={classes.header}>
                {props.header}
            </header>
            {props.children}
        </div>
        
    </section>
}

export default CardSteps;