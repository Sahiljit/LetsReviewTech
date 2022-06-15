import mongoose from 'mongoose'

const upVoteSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})


const reviewSchema = mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },    
    name:{type:String, required:true},
    
    rating:{type:Number, required: true},
    
    review: {type: String, required: true},
    
    tags: [Object],
   
    upVotes: [upVoteSchema],

    numUpVotes:{
        type: Number, 
        required: true,
        default:0
    },

    createdAt: {
        type: Date,
        default: new Date()
    }

})


const Review = mongoose.model('reviews', reviewSchema)

export default Review