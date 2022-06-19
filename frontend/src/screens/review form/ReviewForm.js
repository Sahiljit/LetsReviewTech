import './ReviewForm.scss'
import CircularProgress from '@mui/material/CircularProgress';
import React, {useState, useEffect} from 'react'
import {TextField, Button} from '@mui/material'
import {useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Box,  Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import {updateReview, getReviewDetails} from '../../redux/actions/reviewActions'
import {REVIEW_UPDATE_RESET} from '../../redux/constants'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Select from 'react-select'


const options = [
  { value: 'React', label: 'React' },
  { value: 'Express', label: 'Express' },
  { value: 'Node.js', label: 'Node.js' },
  { value: 'Redux', label: 'Redux' },
  { value: 'Software', label: 'Software' },
  { value: 'Hardware', label: 'Hardware' },
  { value: 'Lenovo', label: 'Lenovo' },
  { value: 'Asus', label: 'Asus' },
  { value: 'Angular', label: 'Angular' },
  { value: 'Django', label: 'Django' },
  { value: 'Git', label: 'Git' },
  { value: 'Python', label: 'Python' },
  { value: 'laptop', label: 'laptop' },
  { value: 'frontend', label: 'frontend' },
  { value: 'backend', label: 'backend' },
  { value: 'Web-development', label: 'Web-development' },
  { value: 'Mobile', label: 'Mobile' },
  { value: 'Apple', label: 'Apple' },
  { value: 'Xiomi', label: 'Xiomi' },


  
]




const ReviewForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {reviewId}  = useParams()


  const [name, setName] = useState('')
  const [rating, setRating] = useState(0)
  const [reviewValue, setReviewValue] = useState('')
  const [tags, setTags] = useState([])




    const  modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
    }

    const formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image'
    ]

    const getReview = useSelector((state) => state.getReview)
    const { loading, error, review } = getReview

    const reviewUpdate  = useSelector((state) => state.reviewUpdate )
    const { loading: loadingUpdate, error:errorUpdate,success: successUpdate, review: updatedReview } = reviewUpdate 

 
  const [hover, setHover] = React.useState(-1);




  const labels = {
    1: 'Useless',
    2: 'Poor',
    3: 'Ok',
    4: 'Good',
    5: 'Excellent',
  };
  
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[rating]}`;
  }

  useEffect(() => {

    if(successUpdate){
        dispatch({type: REVIEW_UPDATE_RESET})  
        navigate('/')
    }
   
    if (!review|| review._id !== reviewId) {    
        dispatch(getReviewDetails(reviewId))
      } 
      else {
        setName(review.name)
        setRating(review.rating)
        setReviewValue(review.review)
        setTags(review.tags.map(tag => ({
          value : tag,
          label : tag
        })))
        // console.log("this is tags coming", tags)
      }
    }, [dispatch, reviewId, review, successUpdate])

    useEffect(() => 
    dispatch(getReviewDetails(reviewId))


    , [])


    const updateReviewHandler = ()=> {

      const newTags = tags.map(tag => tag.value)

      console.log(newTags)

      dispatch(updateReview({
          _id: reviewId,
          name,
          rating,
          reviewValue,
          newTags,
      }))
    }


  function handleTags(data) {
    setTags(data);
  }


  return (
    <>
    { loading
     ?
     <div className="loading-container">
      <div className="loading">
      <CircularProgress className = "loading-icon" />
      </div>
     </div>
   
    :
    <div className="form">
    <div className="heading">Review your Tech here -</div> 


      <div className="row">
            <label for= "name1">Name</label>
            <input 
                id = "name1" 
                type="text" 
                placeholder="Enter course name"
                // className = "course-name-input"
                value ={name}
                onChange= {(e) =>  setName( e.target.value)}
            />
        </div>

      <div className = "review-container" >
        <div className="label">Review</div>
        <ReactQuill 
          theme="snow"  
          modules={modules} 
          formats={formats} 
          value={reviewValue} 
          onChange={setReviewValue}
          // className="review-editor"
          >
            {/* <div className="review-editor"></div> */}
          </ReactQuill>
        
      </div>


    <div className="tags-container">
    <div className="label">Tags</div>
    <Select
        // defaultValue={[options[1], options[2]]}
        // placeholder = "Search by Tags"
        isMulti
        name="colors"
        options={options}
        className="basic-multi-select tags"
        classNamePrefix="select"
        value={tags}
        onChange={handleTags}
        
  />
    </div>
  

      <div className="rating">
      <div className="label">Rating</div>

      <div className="rating-container">
    <Rating
      // name="hover-feedback"
      value={rating}
      precision={1}
      getLabelText={getLabelText}
      onChange={(event, newValue) => {
        setRating(newValue);
      }}
      onChangeActive={(event, newHover) => {
        setHover(newHover);
      }}
      className = "rating-star"
      // emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    />

    {rating !== null && (
      <div className="rating-name">{labels[hover !== -1 ? hover : rating]}</div>
    )}

    </div>


      </div>
  

    <Button  
      variant="contained" 
      className="btn" 
      onClick = {updateReviewHandler}
    >
      Publish Review
    </Button>
    
  </div>

  }
  </>
  )
}

export default ReviewForm