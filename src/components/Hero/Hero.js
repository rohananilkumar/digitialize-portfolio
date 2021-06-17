import classes from './Hero.module.css'
import Nav from './Nav';
import heroImage from '../../assets/images/hero-image.jpg';
import priceTag from '../../assets/images/price-tag.png';
import effort from '../../assets/images/effort.png';
import Advert from './Advert';
import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';


const Hero = () =>{

    const portfolioRef = useSelector(state=>state.portfolioRef);
    const processRef = useSelector(state=>state.processRef);

    const [width, setWidth] = useState();

    const showMeClickHandler = (event) => {
        document.getElementById('portfolio-nav').scrollIntoView({behavior: 'smooth'});
    }

    const butHowClickHandler = (event)=> {
        document.getElementById('delivery-process').scrollIntoView({behavior: 'smooth'});
    }

    window.onresize = () =>{
        setWidth(window.innerWidth);
    }

    useEffect(()=>{
        setWidth(window.innerWidth);
    },[])
    return <section className={classes.hero}>
        <svg  viewBox="0 0 1920 837" fill="none" preserveAspectRatio="none"  xmlns="http://www.w3.org/2000/svg">
        <path d="M-0.5 833V-1H1921.5V485.5C1722.67 474.833 1274.6 495.2 1073 662C871.4 828.8 273.333 845.5 -0.5 833Z" fill="#B3ACFF"/>
        </svg>
        <Nav/>
        <div className={classes.hero__main}>
            <span className={classes.hero__main__header}>
                Stunning portfolios for everyone
            </span>
            <span className={classes.hero__main__description}>
                Ever wanted to impress your employers with a modern website that is made for, about you and that talks all about you? Want a small corner in the internet reserved just for you? Well we have the solution for that!
            </span>
            <div className={classes.hero__btns}>
                <button className={classes['hero__main-btn']} onClick={showMeClickHandler}> 
                    Show me
                </button>
                <button className={classes['hero__side-btn']} onClick={butHowClickHandler}>
                    But how?
                </button>
            </div>
            
        </div>
        <div className={classes.decorations}>
            {width>1400 && <Advert image={priceTag}
                            header='Lowest Price in the market'
                            summary='We provide our products to our customers in the lowest possible price'/>}
            
            <img src={heroImage} alt='portfolio image'/>
            
            {width>1400 && <Advert image={effort}
                            header='Zero effort'
                            summary='We’ll set you up with your portfolio with zero effort from your end. '/>}
        </div>

    </section>
}

export default Hero;