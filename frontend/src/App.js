import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './screens/home screen/HomeScreen';
import LoginScreen from './screens/login screen/LoginScreen';
import RegisterScreen from './screens/register screen/RegisterScreen'
import ReviewForm from './screens/review form/ReviewForm'
import MyReviews from './screens/my reviews/MyReviews'
// import ReviewForm from './screens/review form/ReviewForm'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
    <ToastContainer position="top-center" bodyClassName="toastBody" />

    <BrowserRouter>
    <Header/>
     <Routes>
       <Route path = '/' element = {<HomeScreen/>} />
       <Route path = '/:reviewId/upvote' element = {<HomeScreen/>} />
       <Route path = '/search/:keyword' element = {<HomeScreen/>} /> 
       <Route path = '/review-form/:reviewId' element = {<ReviewForm/>}/>
       <Route path = '/my-reviews' element = {<MyReviews/>}/>
       <Route path = '/login' element = {<LoginScreen/>} />
       <Route path = '/register' element = {<RegisterScreen/>} />
     </Routes>
     {/* <Footer/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
