import React from 'react'
import { NavLink } from 'react-router-dom'
import "./AboutUs.css"
export default function AboutUs() {
  return (
    <div class="container " height="100vh">
     

          <section class="text-gray-600 body-font aboutUs">
  <div class="container mx-auto flex px-4 py-16 items-center justify-center flex-col">
  <h1 class=" sm:text-4xl text-3xl mb-4 font-medium text-gray-900" style={{fontSize:"55px"}}>About Us 
  {/* <span className='why-log'><b>LLOGICAL</b></span> */}
  </h1>
    <img class="lg:w-1/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://firebasestorage.googleapis.com/v0/b/sansaptak-b8665.appspot.com/o/vector%20images%2F24969119-c8f7-4825-9a48-c7f0d8b7c684-removebg-preview.png?alt=media&token=17476b44-4df6-4301-a78b-c5e6d276c65e"/>
    <div className='row'>


    <div class="col-lg-6 col-md-12 col-sm-12">
      
      <p class="mb-8 leading-relaxed mt-16">Welcome to Llogical! We are passionate about using technology to revolutionise education and make it more accessible, effective & affordable for everyone. Our vision is to make education highly personalised and tailored to the needs and goals of each individual learner. We want to break down barriers and make education more equitable, so that everyone has the opportunity to succeed. We provide a platform to the teachers as well by offering them various features such as a portfolio builder to showcase their work, access to a community of peers for collaboration and learning, and personalised recommendations for growth opportunities. We are dedicated to constantly improving and updating our platform to ensure that our users have the best learning experience possible. Thank you for choosing us as your partner in learning!

</p>
    
    </div>
    <div className='col-lg-6 col-md 12 col-sm-12'>
    <video controls width="100%" autoPlay muted loop className='mt-12'>
      <source src="https://firebasestorage.googleapis.com/v0/b/sansaptak-b8665.appspot.com/o/vector%20images%2Fkm_20230207_720p_30f_20230207_212511.mp4?alt=media&token=225d60c3-2de4-4bef-894f-8bae81752252" type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
    </div>
    <div class="flex justify-center text-center mt-12">
        <NavLink to="/courses">

        <button class="inline-flex text-white border-0 py-2 px-6 btn focus:outline-none hover:bg-indigo-600 rounded text-sm" style={{backgroundColor:"#784d9f", wordSpacing:"5px"}}>Our Courses</button>
        </NavLink>
        <NavLink to="/contact">

        <button class="ml-4 inline-flex  border-0  px-6 focus:outline-none btn btn-secondary rounded text-sm sm:text-sm" style={{ wordSpacing:"5px"}}>Contact us</button>
        </NavLink>
      </div>
    </div>
  </div>
</section> 
</div>



  )
}
