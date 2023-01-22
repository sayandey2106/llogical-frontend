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
    <img src="https://firebasestorage.googleapis.com/v0/b/sansaptak-b8665.appspot.com/o/vector%20images%2FFB_IMG_1674130454403.jpg?alt=media&token=ce95125b-e8ee-4508-b1ab-f21d41352c67" width="50px"></img>
      <span class="ml-3 text-xl">LLOGICAL</span>
    </a>
    </NavLink>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Llogical —
      <a href="mailto:support@llogical.com" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">support@llogical.com</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    
    </span>
  </div>
</footer>
    </div>
  )
}
