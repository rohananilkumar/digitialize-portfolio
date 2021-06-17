import ReviewItem from "./ReviewItem"
import classes from './Reviews.module.css'
import Section from '../UI/Section';
import { useSelector } from "react-redux";

const Reviews = () => {
    const reviews = useSelector(state=> state.reviews);

    if(reviews.length === 0){
        return <div></div>
    }

    return <section>
        <Section header='User reviews' 
                summary='Check out what our customers have to say about us'>
            <div className={classes.review__list}>
                {reviews.map(review=>{
                    return <ReviewItem header={review.author} key={review.id}>
                        {review.review}
                    </ReviewItem>
                })}
            </div>
        </Section>

        
    </section>
}

export default Reviews;