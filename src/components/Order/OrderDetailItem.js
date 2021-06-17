import classes from './OrderDetailItem.module.css';

const OrderDetailItem = (props) => {
    return <div className={classes.item}>
        <header className={classes.item__header}>
            {props.header}
        </header>
        <summary className={classes.item__summary}>
            {props.children}
        </summary>
    </div>
}

export default OrderDetailItem;