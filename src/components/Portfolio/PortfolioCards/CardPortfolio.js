import classes from './CardPortfolio.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioDetails from '../../Modal/PortfolioDetails';
import PortfolioData from '../PortfolioData/PortfolioData';

const CardPortfolio = (props) => {

    return <div className={classes.card}>
        {ReactDOM.createPortal(<PortfolioDetails/>, document.getElementById('details-modal'))}
        <img src={props.portfolio.thumbnail} alt='portfolio thumbnail'/>
        <PortfolioData
        buttonLayout='horizontal'
        portfolio={props.portfolio}/>
    </div>
}

export default CardPortfolio;