import classes from './FooterItem.module.css'

const FooterItem = (props) => {
    return <div className={classes.footer__item}>
        <header className={classes.footer__item__header}>
            {props.header}
        </header>
        <summary className={classes.footer__item__summary}>
            {props.children}
        </summary>
    </div>
}

export default FooterItem;