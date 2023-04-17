import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
        <div style={{height:"200px", width:"auto"}}></div>
        <footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <NavLink to="/aboutus">

    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img src="https://firebasestorage.googleapis.com/v0/b/sansaptak-b8665.appspot.com/o/vector%20images%2F24969119-c8f7-4825-9a48-c7f0d8b7c684-removebg-preview.png?alt=media&token=17476b44-4df6-4301-a78b-c5e6d276c65e" width="50px"></img>
      <span class="ml-3 text-xl">LLOGICAL</span>
    </a>
    </NavLink>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-500 sm:py-2 sm:mt-0 mt-4">© 2023 Llogical —
      <a href="mailto:support@llogical.com" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">helpdesk@llogical.com</a>
    </p>
    <span class="inline-flex  sm:mt-0 mt-4 justify-center ">
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-500 sm:py-2 sm:mt-0 ">
      <NavLink to="/privacy">
      
      <a  class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Learner Privacy & Safety</a>
        
      </NavLink>
    </p>
    </span>
    <span class="inline-flex  sm:mt-0 mt-4 justify-center ">
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-500 sm:py-2 sm:mt-0 ">
      <NavLink to="/terms">
      
      <a  class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Terms and Conditions</a>
        
      </NavLink>
    </p>
    </span>
  </div>
</footer>
    </div>
  )
}
