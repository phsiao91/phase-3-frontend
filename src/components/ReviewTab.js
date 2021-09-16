import React from 'react';


function ReviewTab ({ review, alertReview }) {
    console.log( review )

    const deleteReview = () => {
        console.log(review.comment)
        alertReview(review)
    }



    return(
        <ol>
            <h4>{review.user_id.name} said "{review.comment}" with a * {review.star_rating} * star rating!!</h4>
            <button onClick={deleteReview}>Remove Review</button>
        </ol>
    )
}

export default ReviewTab;