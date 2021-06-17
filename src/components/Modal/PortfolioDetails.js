import PortfolioData from '../Portfolio/PortfolioData/PortfolioData';
import PortfolioDisplayMobile from '../Portfolio/PortfolioDisplay/PortfolioDisplayMobile';
import classes from './PortfolioDetails.module.css';

const PortfolioDetails = (props) => {
    return <div className={classes.details__modal}>
        <div className={classes.portfolo__display}>
            {//<PortfolioDisplayMobile images={props.portfolio.images}/>
}
        </div>
        <div className={classes.portfolio__data}>
            {//<PortfolioData portfolio={props.portfolio}/>
}
        </div>
        <div className={classes.portfolio__contents}>
        </div>            
    </div>
}

export default PortfolioDetails;