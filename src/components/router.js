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
export default function Router() {
  return (
    <div>
        <BrowserRouter>

<Header/>
{/* <Contact/> */}
<Routes>
    <Route exact path="/" element={<Hero />}/>
    {/* <Route exact path="/login" element={<Login />}/> */}
    <Route exact path="/courses" element={<Courses />}/>
    <Route exact path="/contact" element={<Contact />}/>      
    <Route exact path="/demo" element={<DemoClass />}/>  
    <Route exact path="/aboutus" element={<AboutUs />}/> 
    {/* <Route exact path="/register" element={<Register/>}/>  */}
    <Route exact path="/subject" element={<Subject/>}/> 
    
      </Routes>
    
      <Footer/>
    </BrowserRouter>
    </div>
  )
}
