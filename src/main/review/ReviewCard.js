import React from 'react';


import RateReview from '../../shared/UI/RateReview';
import './ReviewCard.css'
function ReviewCard({review}) {
    return (

        <div className="review_item">
            <p className="review_item_text">
                {review.comment}
            </p>
            <RateReview star={review.rate}/>
            <p className='review_item_author'>{review.author}</p>
        </div>
    );
}

export default ReviewCard;