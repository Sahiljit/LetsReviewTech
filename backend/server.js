import express from 'express'
import dotenv from 'dotenv' 
import connectDB from './db.js'
import {notFound,errorHandler} from './middleware/errorHandler.js'
import morgan from 'morgan'
// route imports
import reviewRoutes from './routes/reviewRoutes.js'
import userRoutes from './routes/userRoutes.js'



dotenv.config({path : './config.env'})

connectDB()

const app = express()
app.use(express.json())


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}


app.use('/api/reviews', reviewRoutes)
app.use('/api/users', userRoutes)



app.use(notFound) // if we reach here.. that means we haven't hit any route, so we will throw 404
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})