import classes from './Advert.module.css';

const Advert = (props) => {
    return  <span className={classes.advert}>
    <img src={props.image} alt='advert'/>
    <header>
        {props.header}
        
    </header>
    <summary>
        {props.summary}
    </summary>

    </span>
}

export default Advert;