import React from 'react'
import { NavLink } from 'react-router-dom'
import "./AboutUs.css"
export default function AboutUs() {
  return (
    <div class="container " height="100vh">
     

          <section class="text-gray-600 body-font ">
  <div class="container mx-auto flex px-4 py-16 items-center justify-center flex-col">
  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">All About <b>LLOGICAL</b></h1>
    <img class="lg:w-1/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://firebasestorage.googleapis.com/v0/b/sansaptak-b8665.appspot.com/o/vector%20images%2FFB_IMG_1674130454403.jpg?alt=media&token=ce95125b-e8ee-4508-b1ab-f21d41352c67"/>
    <div class="text-center lg:w-2/3 w-full">
      
      <p class="mb-8 leading-relaxed">Welcome to our edtech startup! We are passionate about using technology to revolutionize education and make it more accessible and effective for everyone.

Our mission is to use innovative and cutting-edge technology to empower learners of all ages and backgrounds to reach their full potential. We believe that with the right tools and resources, anyone can succeed in their educational journey.

Our vision is to create a world where education is highly personalized and tailored to the needs and goals of each individual learner. We want to break down barriers and make education more equitable, so that everyone has the opportunity to succeed.

We are dedicated to constantly improving and updating our platform to ensure that our users have the best learning experience possible. We are excited to be a part of the edtech community and to be at the forefront of educational innovation. Thank you for choosing us as your partner in learning!</p>
      <div class="flex justify-center">
        <NavLink to="/courses">

        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Our Courses</button>
        </NavLink>
        <NavLink to="/contact">

        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact us</button>
        </NavLink>
      </div>
    </div>
  </div>
</section> 
</div>



  )
}
