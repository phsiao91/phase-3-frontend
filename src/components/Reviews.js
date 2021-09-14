import React from 'react'
import { useEffect, useState} from 'react'
import NavBar from './NavBar'
import ReviewTab from './ReviewTab'

function Reviews() {

    const [ reviews, setReviews ] = useState([])

    const getReviews = () => {
        fetch("")
    .then(res => res.json())
    .then(fetchedReviews => {console.log(fetchedReviews)

      setReviews(fetchedReviews)

    })
    }
    useEffect(getReviews, [])



    const mapReviews = () => {
        let mappedReviews = reviews.map(eachReview =>{
            return(
                <ReviewTab key={eachReview.id}
                    review={eachReview}
                />
            )
        })
        return mappedReviews
    }



    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target.review.value)
        let newRev = {
            
            comment: e.target.review.value,
            
        }
        e.target.reset()
        // call post function 

        postRev(newRev)
        
    }


     //POST to Gallery

  function postRev(newRev){
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRev)
    })
    .then (response => response.json())
    .then(oneRev => { console.log(oneRev)
    
     setReviews([...reviews, oneRev])
    })
    
  }


    return (
        <>
            <NavBar/>

            <h2>Testimonials: </h2>

            {mapReviews()}
            

            <form onSubmit={handleSubmit} class="revcontainer">
                <h1 class="center">Leave a Review for us! </h1>
                <input className="review-field"
                type="text"
                id="review" 
                
                placeholder="Enter your Review here!"/>

                <input type="submit" value="Submit"/>
            </form>
        
        </>


    )
}

export default Reviews;