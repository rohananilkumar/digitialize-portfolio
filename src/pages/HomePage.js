import DeliveryProcess from "../components/DeliveryProcess/DeliveryProcess";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import Reviews from "../components/Reviews/Reviews";
import WorkWithUs from "../components/WorkWithUs/WorkWithUs";
import classes from './HomePage.module.css';

const HomePage = () =>{
    return <>
    <Hero/>
    <section className={classes.centered__container}>
        <span>
            <Portfolio/>
            <Reviews/>
            <DeliveryProcess/>
            <WorkWithUs/>
        </span>
        <Footer/>

    </section>
    </>
}

export default HomePage;