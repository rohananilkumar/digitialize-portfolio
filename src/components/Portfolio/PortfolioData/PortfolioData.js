import classes from './PortfolioData.module.css';
import HightlightedButton from '../../UI/FormItems/HighlightedButton';
import { useDispatch } from 'react-redux';
import { portfolioActions } from '../../../store';
import { useHistory } from 'react-router';


const PortfolioData = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const buyNowClicked = (event) =>{
        dispatch(portfolioActions.addOrdering(props.portfolio));
        history.push('/order');

    }

    return <div className={classes.card__data}>
                <header>
                    {props.portfolio.title}
                </header>
                <div className={classes.portfolio__summary}>
                {props.portfolio.description}

                </div>
                <div className={`${props.buttonLayout==='horizontal' && classes.bottom__flex}`}>
                    <div className={classes.price}>
                    ₹ {props.portfolio.price}

                    </div>
                    <HightlightedButton onClick={buyNowClicked}>
                        Buy Now
                    </HightlightedButton>
                </div>
            </div>
}

export default PortfolioData;