import classes from './PortfolioDisplayMobile.module.css';
import {useState} from 'react';

const PortfolioDisplayMobile = (props) => {
    const [visibleImage, setVisibleImage] = useState(0);

    const imageChangeHandler = image =>{
        setVisibleImage(image)
    }
    
    return <div className={classes.display__mobile}>
                <div className={classes.display__mobile__imagetrack}>
                    <img src={props.images[visibleImage]} alt='portfolio image'/>
                </div>
                <div className={classes.display__mobile__controls}>
                    {props.images.map((image, index)=>{
                        return <button
                            className={`${classes.display__mobile__button} ${visibleImage === index && classes.display__mobile__button__selected}`}
                            onClick={()=>imageChangeHandler(index)}>
                        </button>
                    })}
                </div>
            </div>
}

export default PortfolioDisplayMobile;