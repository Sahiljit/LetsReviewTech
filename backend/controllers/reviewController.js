import mongoose from "mongoose"
import asyncHandler from 'express-async-handler'

import Review from "../models/reviewModel.js"


export const getReviews = asyncHandler(async(req, res) => {

    const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

 
    const reviews = await Review.find({...keyword}).populate('user', 'name')

    res.status(200).json(reviews)
    
})

export const getReviewById = asyncHandler(async(req, res) => {
 
      
    const review = await Review.findById(req.params.id)

    if(review){
        res.json(review)
    }
    else{
        res.status(404)
        throw new Error('review not found')
    }
})


export const deleteAll = asyncHandler(async(req, res) => {
 
    const reviews = await Review.deleteMany({})

    res.json({success: 'true'})

})

export const createReview = asyncHandler(async(req, res) => { 
    
    const upvote = {
        user: req.user._id,
    }

    const review = new Review({
        name: 'Sample Name',
        user: req.user._id,
        rating:0,
        review: 'Sampe Review',
        upVotes : [upvote],
        numUpVotes :1,    
    })

    const createdReview = await review.save()
    res.status(201).json(createdReview)

    

   
})


export const upVote  = asyncHandler(async(req, res) => {


    const review = await Review.findById(req.params.id)
    console.log(req.params.id)

    if(review){

        if(review.upVotes.length !== 0){
        const alreadyUpVoted = review.upVotes.find(r => r.user.toString() === req.user._id.toString())

        if(alreadyUpVoted){
            res.status(400)
            throw new Error('Review already upvoted')
        }
    }
        
        const upvote = {
            user: req.user._id,
        }

        review.upVotes.push(upvote)

        review.numUpVotes = review.upVotes.length  

        await review.save()
        res.status(201).json({message: "UpVoted"})

    }else{
        res.status(404)
        throw new Error('Review not found')
    }


})

export const updateReview = asyncHandler(async(req, res)=> {

    const {name, rating, reviewValue, tags} = req.body

    const review = await Review.findById(req.params.id)

    if(review){

        review.name = name
        review.rating = rating
        review.review = reviewValue
        review.tags = tags


        const updatedReview = await review.save()
        
        res.json(updatedReview)

    }else{
        res.status(404)
        throw new Error('Review not found')
    }
})

export const deleteReview = asyncHandler(async(req, res)=> {
    
    const review = await Review.findById(req.params.id)

    if(review){
        await review.remove()
        res.json({message: "review deleted"})
    }
    else{
        res.status(404)
        throw new Error('review not found')
    }
    
})


export const getMyReviews = asyncHandler(async(req, res) => {
 
    const reviews = await Review.find({user: req.user._id}).populate('user', 'name')

    res.status(200).json(reviews)

})




