import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Hero from './Hero/Hero';
import Landing from './Hero/Landing';
import Login from './Login/Login';
import Courses from './Courses/Courses';
import Contact from './Contact us/Contact us';
import DemoClass from './DemoClass/DemoClass';
import AboutUs from './AboutUs/AboutUs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Register from './Register/Register';
import Subject from './Subject/Subject';
import JoinUs from './Mock/JoinUs'
import MockForm from './DemoClass/MockForm';
export default function Router() {
  return (
    <div>
        <BrowserRouter>

<Header/>
<button style={{ position: "fixed", bottom:"80px",transition:" ease-in-out" , right:"100px", zIndex:"30"}} className='btn hidden  bg-red-600 btn-lg md:block lg:block rounded-full shadow-md border-0 hover:scale-1.5 hover:bg-purple-600 hover:w-16 hover:h-16' onClick={()=>{
      window.scrollTo(0, 0)
}}>

<i class="fas text-white fa-arrow-up"></i>
</button>
{/* <Contact/> */}
  {
    !localStorage.getItem("auth_token") ?
<Routes>
  
    <Route exact path="/" element={<Hero />}/>
    <Route exact path="/login" element={<Login />}/>
    <Route exact path="/courses" element={<Courses />}/>
    <Route exact path="/contact" element={<Contact />}/>      
    <Route exact path="/demo" element={<DemoClass />}/>  
    <Route exact path="/aboutus" element={<AboutUs />}/> 
    <Route exact path="/register" element={<Register/>}/> 
    <Route exact path="/subject" element={<Subject/>}/> 
    <Route exact path="/mocktest" element={<MockForm/>}/>
    <Route exact path="/joinus" element={<JoinUs/>}/>  
      </Routes>

      :
      <Routes>
  
    <Route exact path="/" element={<Hero />}/>

    <Route exact path="/courses" element={<Courses />}/>
    <Route exact path="/contact" element={<Contact />}/>      
    <Route exact path="/demo" element={<DemoClass />}/>  
    <Route exact path="/aboutus" element={<AboutUs />}/> 
    <Route exact path="/login" element={<Login />}/>
    <Route exact path="/subject" element={<Subject/>}/> 
    <Route exact path="/mocktest" element={<MockForm/>}/> 
    <Route exact path="/joinus" element={<JoinUs/>}/> 
      </Routes>
  }
    
      <Footer/>
      
    </BrowserRouter>
    </div>
  )
}
