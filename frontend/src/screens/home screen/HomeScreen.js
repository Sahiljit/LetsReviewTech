import React , {useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getReviews, upVote} from '../../redux/actions/reviewActions'
import Filter from '../../components/filter/Filter'
import ReviewCard from '../../components/review card/ReviewCard'
import {UP_VOTE_RESET, REVIEW_DELETE_RESET} from '../../redux/constants'
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from "react-toastify";




import './HomeScreen.scss'

const HomeScreen = () => {

  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const {keyword} = useParams()

  const reviewsList = useSelector((state) => state.reviewsList)
  const {reviews, loading, error} = reviewsList

  const upVoteReview = useSelector((state) => state.upVoteReview)
  const {success: successUpVote, loading:loadingUpVote, error:errorUpVote} = upVoteReview

  const reviewDelete = useSelector((state) => state.reviewDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete} = reviewDelete


  useEffect(()=> {

    if(successUpVote){
      dispatch({type: UP_VOTE_RESET})
    }
    if(successDelete){
      dispatch({type: REVIEW_DELETE_RESET})
    }

    dispatch(getReviews(keyword))


  }, [dispatch, successUpVote,  keyword,successDelete])


  useEffect(() => {
    if(errorUpVote){
      if(`${errorUpVote}`.includes("token"))
        toast.error("Please Sign In to UpVote")
      else
      toast.error(`${errorUpVote}`)
      console.log("inside if statement")     

    }
    dispatch({type: UP_VOTE_RESET})
  }, [errorUpVote])


  return (
    <div className ="home-screen">
              
      <div >
          <Filter/>
      </div>

      <div className="home-screen-container">
          {loading?
                  <div className="loading-container">
                  <div className="loading">
                  <CircularProgress className = "loading-icon" />
                  </div>
                 </div>
              :
              <div className="reviews-container">
              {!reviews || reviews.length == 0 ?

              <div className="no-reivews-message">
                No Reviews Found
              </div>

              :
              <> 
              {reviews && reviews.map((review)=> (
                <ReviewCard review={review} />
              ))}
              </>
              }
             
              </div>
          }
      </div>
      
    </div>
  )
}

export default HomeScreen