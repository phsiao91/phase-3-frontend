import React from 'react';


function ReviewTab ({ review, alertReview }) {
    console.log( review )

    const deleteReview = () => {
        console.log(review.comment)
        alertReview(review)
    }



    return(
        <ol>
            <h4>"{review.comment}"</h4>
            <h4>User:{review.user_id}   gave  {review.star_rating}:star:️'s</h4>
            <button onClick={deleteReview}>Remove Review</button>
        </ol>
    )
}

export default ReviewTab;