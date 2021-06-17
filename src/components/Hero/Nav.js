import classes from './Nav.module.css';
import { useSelector } from 'react-redux';

const Nav = () =>{
    const footerRef = useSelector(state=>state.footerRef);

    const contactClickHandler = (event) =>{
        document.getElementById('footer').scrollIntoView({behavior: 'smooth'});
    }

    return <nav className={classes.nav}>
        
            <span className={classes['nav__header']}>
                DigiTialize
            </span>


            <button className={classes['nav__button']} onClick={contactClickHandler}>
                Contact Us
            </button>
        
    </nav>
}

export default Nav;