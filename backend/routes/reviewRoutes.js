import express from 'express'
import { getReviews, 
        createReview, 
        updateReview, 
        deleteAll, 
        upVote,
        getReviewById, 
        deleteReview,
        getMyReviews,
        getReviewsByTags,
        
 } from '../controllers/reviewController.js'

import { protect } from '../middleware/authHandler.js'


const router = express.Router()

router
    .route('/')
    .get(getReviews)
    .post(protect,createReview)
    .delete(deleteAll)

router
    .route('/my-reviews')
    .get(protect,getMyReviews)


router
    .route('/search')
    .post(getReviewsByTags)



router
    .route('/:id')
    .get(protect,getReviewById)
    .put(protect,updateReview)
    .delete(protect, deleteReview)
    

router
    .route('/:id/upvote')
    .put(protect,upVote)
    




export default router
