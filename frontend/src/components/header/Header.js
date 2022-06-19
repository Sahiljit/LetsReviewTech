import React , {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux'
import {Button, Menu, MenuItem} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
    logout
}
from '../../redux/actions/userActions'
import {createReview} from '../../redux/actions/reviewActions'
import { REVIEW_CREATE_RESET } from '../../redux/constants';


import './Header.scss'





const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const [keyword, setKeyword] = useState('')


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);


  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const reviewCreate = useSelector((state) => state.reviewCreate)
  const {success: successReviewCreate, loading:loadingReviewCreate, error:errorReviewCreate, review} = reviewCreate

    
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };


  const logoutHandler = () =>{
    setAnchorEl(null);
    dispatch(logout())
  }

  const myReviewsHandler = () => {
    setAnchorEl(null);
    navigate(`/my-reviews/`)
    
  }

  useEffect(() => {

    if(successReviewCreate){
      navigate(`/review-form/${review._id}`)
      dispatch({type: REVIEW_CREATE_RESET})

    }

  }, [successReviewCreate])


  const createReviewHandler = () => {
    dispatch(createReview())
  }


  const searchHandler = (e) => {

    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
      setKeyword('')
    } else {
      navigate('/')
    }
  }

  
  return (
    <div className="header">
      <div className="section-header">

      <div className="search-title">
      <div className="title" onClick={()=>navigate('/')}>Lets_Review_Tech</div>

      <div className="row">
          <input 
              // id = "countInStock" 
              type="text" 
              placeholder="Search Tech by name"
              value = {keyword}
              onChange= {(e) => setKeyword(e.target.value)}
          />
          <Button
          className='search-btn'
          variant="outlined"
          onClick = {searchHandler}
          >
            Search
          </Button>
      </div>

       

      </div>

     

      {userInfo ?
      <div className="navigation">
      <Button
      variant = 'contained'
      className = 'btn'
      onClick = {createReviewHandler}
      >
        Create Reivew
      </Button>

        <Button
          onClick={handleClick}
          variant = "outlined"
          className="btn1"
        >
          {userInfo.name}
          <ArrowDropDownIcon className="icon1"/>
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
   
        >
          <MenuItem  style = {{fontSize: "20px"}} onClick={myReviewsHandler}>My Reviews</MenuItem>
          <MenuItem  style = {{fontSize: "20px"}} onClick={logoutHandler}>Logout</MenuItem>
        </Menu>
            

      </div>
      :
      <Button
      variant = 'contained'
      className = 'btn'
      onClick = {() => navigate('/login')}
      >
        Sign-in to review
      </Button>
      }




      </div>
        
        
    </div>
  )
}

export default Header