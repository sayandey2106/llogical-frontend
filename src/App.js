import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact us/Contact us';
import Footer from './components/Footer/Footer';
import DemoClass from './components/DemoClass/DemoClass';
import AboutUs from './components/AboutUs/AboutUs';
import Router from './components/router';

// import Routes from './components/router';
function App() {

  useEffect(() => {
    sessionStorage.setItem('isHome',true)
  }, [])
  
  return (
    <div className="App bg-slate-100">



<Router/>

          

    </div>
  );
}

export default App;
