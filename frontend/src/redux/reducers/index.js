import {combineReducers} from 'redux'

import {
    reviewCreateReducer,
    getReviewsReducer,
    getMyReviewsReducer,
    upVoteReducer,
    getReviewReducer,
    reviewUpdateReducer,
    reviewDeleteReducer,
    
} from './reviewReducers'

import { 
    userLoginReducer,
    userRegisterReducer,
    
}
from './userReducers'

export default combineReducers({
   
    reviewsList: getReviewsReducer,
    getReview: getReviewReducer,
    myReviews:getMyReviewsReducer,
    reviewUpdate: reviewUpdateReducer,
    reviewCreate: reviewCreateReducer,
    reviewDelete: reviewDeleteReducer,
    upVoteReview : upVoteReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer

})