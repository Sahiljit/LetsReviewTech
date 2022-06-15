import React , {useEffect, useState} from 'react'
import {Card , CardContent, CardMedia,Rating, Button}from '@mui/material';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {deleteReview, upVote} from '../../redux/actions/reviewActions'
import {useDispatch, useSelector} from 'react-redux'
import './ReviewCard.scss'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import moment from 'moment'



import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const ReviewCard = ({review}) => {

    let reviewText = review.review.substring(0,200)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

 
    const [show, setShow] = useState(false)

 


    const upVoteHandler = (id) => {
      dispatch(upVote(id))
    }

    const deleteHandler = (id) => {
      if(window.confirm("Are you sure ?"))
      dispatch(deleteReview(id))
    }

    

  return (
    <div className="review-card">
        <Card className="card">
      
            <CardContent>
              <div className="name-by">
              <div className="tech-name">{review.name}</div>
              <div className="user-name">~ {review.user.name}</div>
              </div>
              <Rating 
                className = 'rating'
                defaultValue={review.rating} 
                precision={0.5} 
                readOnly />

              <div className="review">
                {!show 
                  ?
                  <>
                 <ReactQuill value = {reviewText} readOnly={true} theme = "bubble"/>
                  <Button className = "read-more" onClick = {()=> setShow(true)}>Read More ...</Button>
                 </>
                 :
                 <>
                 <ReactQuill value = {review.review} readOnly={true} theme = "bubble"/>
                 <Button className = "show-less" onClick = {()=> setShow(false)}>...show less</Button>
                 </>
                }
               

              </div>
              {/* <Link to = {`/review/${review._id}`} className= "read-more">Read More...</Link> */}

              <div className="bottom-container">
                <div className="col-1">
              <div className="row-1">
              <div className="up-votes">
               
                <Button
                className = 'up-vote-btn'
                onClick = {() => upVoteHandler(review._id)}
                >
                Up Vote 
                <ArrowDropUpIcon className="icon"/>
                </Button>

                 {review.numUpVotes}
                 </div>
                  
              </div>

              {/* {error && <div className="error">
                {error}
              </div>} */}

              </div>
            
             <div className="time-edit-container">
              <div className="time">
                {(review.createdAt).substring(0,10)}
              </div>

              {userInfo && userInfo._id === review.user._id
              &&
              <div className="edit-container">
                <Button
                className = 'edit-btn'
                onClick = {() => navigate(`/review-form/${review._id}`)}
                variant = 'contained'
                >
                  Edit
                </Button>
                <Button
                className = 'delete-btn'
                variant = 'contained'
                onClick = {() => deleteHandler(review._id)}
                >
                  Delete
                </Button>
              </div>
              } 

             
              </div>                       
              </div>      

                 

            </CardContent>


    </Card>
    </div>
  )
}

export default ReviewCard