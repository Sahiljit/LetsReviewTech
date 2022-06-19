import React , {useEffect} from 'react'
import './MyReviews.scss'
import {useNavigate, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getMyReviews} from '../../redux/actions/reviewActions'
import ReviewCard from '../../components/review card/ReviewCard'
import CircularProgress from '@mui/material/CircularProgress';


const MyReviews = () => {


    const dispatch = useDispatch()
    const myReviews = useSelector((state) => state.myReviews)
    const {reviews, loading, error} = myReviews


    useEffect(()=> {
        
        dispatch(getMyReviews())   
    
      }, [dispatch])


      

  return (
    <div className = "my-reviews-screen">

    <div className="my-reviews-screen-container">
        {loading?
                  <div className="loading-container">
                  <div className="loading">
                  <CircularProgress className = "loading-icon" />
                  </div>
                 </div>
            :
            <div className="reviews-container">
            {reviews.map((review)=> (
                <ReviewCard review={review} />
            ))}
            </div>
        }
        </div>
        
    </div>
  )
}

export default MyReviews