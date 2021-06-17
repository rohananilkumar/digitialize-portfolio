import classes from './PortfolioNav.module.css';
import {useHistory, useRouteMatch} from 'react-router-dom';

const PortfolioNav = (props) => {
    const history = useHistory();
    const match = useRouteMatch();

    const customPath='/home/custom';
    const predesignedPath = '/home/pre-designed';

    const customHandler = (event) => {
        history.replace(customPath);
    }

    const preDefinedHandler = (event) => {
        history.replace(predesignedPath);
    }

    console.log(match.url);

    return <div className={classes.portfolio__nav__holder} id='portfolio-nav'>
        <div className={classes.portfolio__nav}>
            <button className={`${classes.nav__button} ${match.path === predesignedPath?classes.selected:''}`} onClick={preDefinedHandler}>
                PreDesigned Portfolio
            </button>
            <button className={`${classes.nav__button} ${match.path === customPath?classes.selected:''}`} onClick={customHandler}>
                Custom Portfolio
            </button>
        </div>
    </div>
}

export default PortfolioNav;