import axios from 'axios'

import { 
    REVIEW_CREATE_REQUEST,
    REVIEW_CREATE_SUCCESS,
    REVIEW_CREATE_FAIL,
    REVIEW_UPDATE_REQUEST,
    REVIEW_UPDATE_SUCCESS,
    REVIEW_UPDATE_FAIL,
    REVIEW_UPDATE_RESET,
    REVIEW_DELETE_REQUEST,
    REVIEW_DELETE_SUCCESS,
    REVIEW_DELETE_FAIL,
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_FAIL,
    GET_REVIEW_REQUEST,
    GET_REVIEW_SUCCESS,
    GET_REVIEW_FAIL,
    GET_MY_REVIEWS_REQUEST,
    GET_MY_REVIEWS_SUCCESS,
    GET_MY_REVIEWS_FAIL,
    UP_VOTE_REQUEST,
    UP_VOTE_SUCCESS,
    UP_VOTE_FAIL,
}
from '../constants'


export const getReviews = (keyword = '') => async(dispatch) => {

    try{
        dispatch({ 
          type: GET_REVIEWS_REQUEST
        })
           
        const {data} = await axios.get(`/api/reviews/?keyword=${keyword}`)
    
        
        dispatch({
          type: GET_REVIEWS_SUCCESS,
          payload: data
        })      
    
      }
      catch (error) {
        dispatch({
          type: GET_REVIEWS_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      }
    
}


export const getReviewDetails = (id) => async(dispatch, getState) => {

  try{
      dispatch({ 
        type: GET_REVIEW_REQUEST
      })
      
      console.log(id)

      // this is how we destructure 2 levels down 
      const {userLogin: {userInfo}} = getState()

      const config = {
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }

      const {data} = await axios.get(`/api/reviews/${id}`,config)
      
      
      
      dispatch({
        type: GET_REVIEW_SUCCESS,
        payload: data
      })      
  
    }
    catch (error) {
      dispatch({
        type: GET_REVIEW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  
}



export const createReview = (review) => async (dispatch, getState) => {

    try{
      dispatch({ 
        type: REVIEW_CREATE_REQUEST
      })
      
      // this is how we destructure 2 levels down 
      const {userLogin: {userInfo}} = getState()
  
      const config = {
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }
  
      const {data} = await axios.post(`/api/reviews/`,{}, config)
  
      
      dispatch({
        type: REVIEW_CREATE_SUCCESS,
        payload: data
      })      
  
    }
    catch (error) {
      dispatch({
        type: REVIEW_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  
  }



export const upVote = (id) => async (dispatch, getState) => {

    try{
      dispatch({ 
        type: UP_VOTE_REQUEST
      })
      
      // this is how we destructure 2 levels down 
      const {userLogin: {userInfo}} = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      }
  
      await axios.put(`/api/reviews/${id}/upvote`,{}, config)
  
      
      dispatch({
        type: UP_VOTE_SUCCESS,
        // payload: data
      })      
  
    }
    catch (error) {
      dispatch({
        type: UP_VOTE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  
  }


export const updateReview = (review) => async (dispatch, getState)=>{

    try{
      dispatch({ 
        type: REVIEW_UPDATE_REQUEST
      })
      
      // this is how we destructure 2 levels down 
      const {userLogin: {userInfo}} = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }
  
      const {data} = await axios.put(`/api/reviews/${review._id}`,review, config)
  
      
      dispatch({
        type: REVIEW_UPDATE_SUCCESS,
        payload: data
      })      
  
    }
    catch (error) {
      dispatch({
        type: REVIEW_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  
  }


export const deleteReview = (id) => async(dispatch, getState) => {

    try{
        dispatch({ 
          type: REVIEW_DELETE_REQUEST
        })
        
  
        // this is how we destructure 2 levels down 
        const {userLogin: {userInfo}} = getState()
  
        const config = {
          headers: {
            // 'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`
          }
        }
  
         await axios.delete(`/api/reviews/${id}`,config)
        
        
        
        dispatch({
          type: REVIEW_DELETE_SUCCESS,
        })      
    
      }
      catch (error) {
        dispatch({
          type: REVIEW_DELETE_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      }
    
  }


export const getMyReviews = () => async(dispatch, getState) => {

    try{
        dispatch({ 
          type: GET_MY_REVIEWS_REQUEST
        })

            // this is how we destructure 2 levels down 
        const {userLogin: {userInfo}} = getState()
    
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`
          }
        }
           
        const {data} = await axios.get(`/api/reviews/my-reviews/`, config)
    
        
        dispatch({
          type: GET_MY_REVIEWS_SUCCESS,
          payload: data
        })      
    
      }
      catch (error) {
        dispatch({
          type: GET_MY_REVIEWS_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      }
    
}





  