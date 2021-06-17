import { useState } from 'react';
import { Route } from 'react-router-dom';
import CustomPortfolio from './CustomPortfolio';
import classes from './Portfolio.module.css';
import PortfolioNav from './PortfolioNav';
import PreDesignedPortfolio from './PreDesignedPortfolio';

const Portfolio = () => {

    const [selected, setSelected] = useState('predesigned');

    const onChangeHandler = (selection) => {
        setSelected(selection)
    }

    return <div className={classes.portfolio}>
        <Route path='/home/pre-designed'>
            <PortfolioNav selected={selected} onNavChanged={onChangeHandler}/>
            <PreDesignedPortfolio />
        </Route>
        <Route path='/home/custom'>
            <PortfolioNav selected={selected} onNavChanged={onChangeHandler}/>
            <CustomPortfolio/>
        </Route>
        
    </div>;
}


export default Portfolio;