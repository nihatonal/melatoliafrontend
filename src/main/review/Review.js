import React from 'react';

import ReviewCard from './ReviewCard';
import SimpleSlider from '../../shared/UI/SimpleSlider'
import './Review.css';
function Review(props) {
    const reviews = [

        {
            id: 'comment_1',
            comment: '"These hand towel are great. I ordered grey. Didn’t fade or have lint. Nice thickness."',
            author: 'Sophronia Dalya',
            rate: 4.3

        },
        {
            id: 'comment_2',
            comment: '"These are great towels. They are large, thick, plush and absorb water very well."',
            author: 'Rosanna Perla',
            rate: 4.8

        },
        {
            id: 'comment_3',
            comment: '"I love how soft and absorbent these towels are."',
            author: 'Sandhya Cristyn',
            rate: 5

        },
        {
            id: 'comment_4',
            comment: '"These towels are very soft, the blue is deep and true to color. The quality is more than I expected."',
            author: 'Lisa Teh',
            rate: 4.7

        },
        {
            id: 'comment_5',
            comment: '"These are great towels. They are large, thick, plush and absorb water very well.',
            author: 'Hardwin Luce',
            rate: 5

        },
        {
            id: 'comment_6',
            comment: '"The towels are very soft and would look great in anyone s bathroom"',
            author: 'Ronald Edward',
            rate: 4.2

        },
        {
            id: 'comment_7',
            comment: '"These towels are very soft, the blue is deep and true to color. The quality is more than I expected."',
            author: 'Lisa Teh',
            rate: 4.9

        }
    ]
    return (
        <div className="review_container p-15">
            <div className="review_wrapper">
                <div className="review_items_wrapper">
                    <SimpleSlider>
                        {reviews.slice(0, 6).map((review) => <ReviewCard review={review} key={review.id}/>)}

                    </SimpleSlider>

                </div>

            </div>

        </div>
    );
}

export default Review;