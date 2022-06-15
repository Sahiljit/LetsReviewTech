import { 
    REVIEW_CREATE_REQUEST,
    REVIEW_CREATE_SUCCESS,
    REVIEW_CREATE_FAIL,
    REVIEW_UPDATE_REQUEST,
    REVIEW_UPDATE_SUCCESS,
    REVIEW_UPDATE_FAIL,
    REVIEW_UPDATE_RESET,
    REVIEW_CREATE_RESET,
    REVIEW_DELETE_REQUEST,
    REVIEW_DELETE_SUCCESS,
    REVIEW_DELETE_FAIL,
    REVIEW_DELETE_RESET,
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
    UP_VOTE_RESET
}
from '../constants'


export const getReviewsReducer = (state = {reviews: []}, action) => {

    switch(action.type){

        case GET_REVIEWS_REQUEST:
            return { loading: true }
      
        case GET_REVIEWS_SUCCESS:
            return { loading: false, success: true, reviews: action.payload }
      
        case GET_REVIEWS_FAIL:
            return { loading: false, error: action.payload }

        
        default:
            return state

    }
}

export const getReviewReducer = (state = {review: {}}, action) => {

    switch(action.type){

        case GET_REVIEW_REQUEST:
            return { loading: true }
      
        case GET_REVIEW_SUCCESS:
            return { loading: false, success: true, review: action.payload }
      
        case GET_REVIEW_FAIL:
            return { loading: false, error: action.payload }

        
        default:
            return state

    }
}


export const reviewCreateReducer = (state = {}, action) => {

    switch (action.type) {
      
        case REVIEW_CREATE_REQUEST:
            return { loading: true }
      
        case REVIEW_CREATE_SUCCESS:
            return { loading: false, success: true, review: action.payload }
      
        case REVIEW_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case REVIEW_CREATE_RESET:
            return{}

        
        default:
            return state
    }

}


export const upVoteReducer = (state = {}, action) => {

    switch (action.type) {
      
        case UP_VOTE_REQUEST:
            return { loading: true }
      
        case UP_VOTE_SUCCESS:
            return { loading: false, success: true }
      
        case UP_VOTE_FAIL:
            return { loading: false, error: action.payload }


        case UP_VOTE_RESET:
            return{}

        
        default:
            return state
    }

}


export const reviewUpdateReducer = (state = {review: {}}, action) => {

    switch (action.type) {
      
        case REVIEW_UPDATE_REQUEST:
            return { loading: true }
      
        case REVIEW_UPDATE_SUCCESS:
            return { loading: false, success: true, review: action.payload }
      
        case REVIEW_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        case REVIEW_UPDATE_RESET:
            return{}
      
        default:
            return state
    }

}

export const reviewDeleteReducer = (state = {}, action) => {

    switch(action.type){

        case REVIEW_DELETE_REQUEST:
            return { loading: true }
      
        case REVIEW_DELETE_SUCCESS:
            return { loading: false, success: true }
      
        case REVIEW_DELETE_FAIL:
            return { loading: false, error: action.payload }

        
        case REVIEW_DELETE_RESET:
            return{}

        
        default:
            return state

    }
}

export const getMyReviewsReducer = (state = {reviews: []}, action) => {

    switch(action.type){

        case GET_MY_REVIEWS_REQUEST:
            return { loading: true }
      
        case GET_MY_REVIEWS_SUCCESS:
            return { loading: false, success: true, reviews: action.payload }
      
        case GET_MY_REVIEWS_FAIL:
            return { loading: false, error: action.payload }

        
        default:
            return state

    }
}
