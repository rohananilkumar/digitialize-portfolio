import classes from './ReviewItem.module.css';

const ReviewItem = (props) => {
    return <div className={classes.review__item}>
        <header className={classes.review__item__header}>
            {props.header}
        </header>
        <summary className={classes.review__item__summary}>
            {props.children}
        </summary>
    </div>
}

export default ReviewItem;