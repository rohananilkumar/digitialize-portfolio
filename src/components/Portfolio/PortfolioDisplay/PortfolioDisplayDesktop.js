import classes from './PortfolioDisplayDesktop.module.css';

const PortfolioDisplayDesktop = props => {
    return <div className={classes.display}>
                <img src={props.images[1]} alt='portfolio image' className={classes.left__image}/>
                <img src={props.images[0]} alt='portfolio image' className={classes.lead__image}/>
                <img src={props.images[2]} alt='portfolio image' className={classes.right__image}/>
            </div>
}

export default PortfolioDisplayDesktop;