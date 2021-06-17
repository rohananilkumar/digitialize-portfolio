import CardPortfolio from './PortfolioCards/CardPortfolio';
import CardPortfolioPremium from './PortfolioCards/CardPortfolioPremium';
import SectionIntro from '../UI/SectionIntro';
import classes from './PreDesignedPortfolio.module.css';
import { useDispatch, useSelector } from 'react-redux';
import useHttp from '../../hooks/use-http';
import { useEffect } from 'react';
import { portfolioActions } from '../../store';


const getLayout = (portfolios) => {
    let premium = portfolios.filter(portfolio=>portfolio.isPremium);
    const regular = portfolios.filter(portfolio=>!portfolio.isPremium);
    const data = [];
    let regularArray = [];


    for(let i=0; i<regular.length; i+=2){
        regularArray.push([regular[i], regular[i+1]])
    }


    while(premium.length !== 0 || regularArray.length !== 0){
        const premiumItem = premium.shift();
        const regularItem = regularArray.shift();
        if(premiumItem) data.push(premiumItem);
        if(regularItem) data.push(regularItem);
    }

    return data;
}


const PreDesignedPortfolio = (props) => {

    const portfolioHttp = useHttp('portfolio',{method:'GET'});
    const dispatch = useDispatch();

    useEffect(async ()=>{
        const portfolios = await portfolioHttp.fetchData();
        console.log(portfolios);
        const processedPortfolios = [];
        for(let portfolio in portfolios){
            processedPortfolios.push({
                id:portfolio,
                ...portfolios[portfolio]
            });
        }
        dispatch(portfolioActions.setPortfolios(processedPortfolios));
    },[])

    const portfolios = useSelector(state=> state.portfolios);

    const layoutMap = getLayout(portfolios);

    return <section className={classes.predefined_page} id='portfolio'>
        <SectionIntro header='Our Pre-Designed Collections'>
            Select from our pre-designed collections that make you stand out from the crowd
        </SectionIntro>
        <div className={classes.portfolio__track}>
            {layoutMap.map(item=>{
                if(item?.isPremium){
                    return <CardPortfolioPremium key={item.id} portfolio={item}/>
                }else{
                    return <div className={classes.horizontal}>
                            <CardPortfolio key={item[0].id} portfolio={item[0]}/>
                            <CardPortfolio key={item[1].id} portfolio={item[1]}/>
                        </div>
                }
            })}
            
        </div>
    </section>
}

export default PreDesignedPortfolio;