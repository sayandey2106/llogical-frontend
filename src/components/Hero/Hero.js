import React from 'react';
import Slider from './Slider';
import Container from 'react-bootstrap/esm/Container';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Contact from '../Contact us/Contact us';
import Courses from '../Courses/Courses';
import './Hero.css'
import Landing from './Landing';
import AboutUs from '../AboutUs/AboutUs';
import Subject from '../Subject/Subject';
import WhyUs from '../WhyUs/WhyUs';
export default function Hero() {
  return (
    <section >
{/* slider start */}
    <div>
        {/* <Slider/> */}
    </div>
{/* slider end */}

{/* hero start */}
    <div>
      <Landing/>
     
<Subject/>
      <Courses/>
<WhyUs/>
<AboutUs/>
      <Contact/>
    </div>
    {/* hero end */}
    </section>
  )
}
