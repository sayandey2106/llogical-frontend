import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import { courseData } from '../../data/course';
import Slider from '../Hero/Slider';
import '../AboutUs/AboutUs.css'
import JoinUs from '../Mock/JoinUs';
const customStyles = {
  content: {
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:"400px"
  },
};

export default function Courses() {

  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(courseData)
  const [toggle, setToggle] = useState(0);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [details, setDetails] = useState([]);

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }
  const toggleTab = (i) => {
    setToggle(i)
  }
  const filterCourse = (type) => {
    const updated = courseData.filter((curr) => {
      return curr.type === type || curr.class === type
    })
    setItem(updated);
  }
  const filterCourseByClass = (type) => {
    const updated = courseData.filter((curr) => {
      return curr.type === type
    })
    setItem(updated);
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      {/* <Slider/> */}

      <section class=" container text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-16 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-4xl font-medium title-font mb-2 text-gray-900" style={{ fontSize: "60px" }}>Our Courses</h1>
            {/* <div class="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
        <button class="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Class 10</button>
        <button class="py-1 px-4 focus:outline-none">Class 12 </button>
      </div> */}
          </div>
          <div class="flex items-center justify-center my-3">
            <div class="inline-flex  focus:shadow-lg" role="group">
              <button type="button" style={{ wordSpacing: "6px" }} className={toggle === 0 ? "  rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xl  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out active-tab"
                : "rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xl tracking-wider  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"}

                onClick={() => {
                  setItem(courseData)
                  setToggle(0)
                }}


              >ALL COURSES</button>
            </div>
          </div>
          {/* <div class="flex items-center justify-center m-3">
  <div class="inline-flex  focus:shadow-lg " role="group">
    <button type="button" className={toggle===1?"  rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out active-tab"
    : "rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"}
   
      onClick={()=>{
        filterCourse("BOARD")
        setToggle(1)
      }}
      
      
      >BOARD</button>
    <button type="button" className={toggle===2?"  rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out active-tab"
    : "rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"}

       
      onClick={()=>{
        filterCourse("WBJEE")
        toggleTab(2)
      }}>WBJEE</button>

    <button type="button"  className={toggle===4?"  rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out active-tab"
    : "rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"}
      onClick={()=>{
        filterCourse("NEET")
        toggleTab(4)
      }}>NEET</button>
   
  </div>
  
  </div>

  <div class="flex items-center justify-center m-1">
  <div class="inline-flex  focus:shadow-lg " role="group">
  <button type="button"  className={toggle===10?"  rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out active-tab"
    : "rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"}
      onClick={()=>{
        filterCourse("JEE ADVANCE")
        toggleTab(10)
      }}>JEE ADVANCE</button>
 <button type="button"  className={toggle===3?"  rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out active-tab"
    : "rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"}
      onClick={()=>{
        filterCourse("JEE")
        toggleTab(3)
      }}>JEE MAINS</button>
  </div>
  </div> */}

           <div class="flex items-center justify-center m-3">
            <div class="inline-flex  focus:shadow-lg " role="group">
              <button type="button" className={toggle === 7 ? "  rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out active-tab"
                : "rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"}

                onClick={() => {
                  filterCourseByClass("BOARD")
                  setToggle(7)
                }}


              >School Students</button>
              <button type="button" className={toggle === 8 ? "  rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out active-tab"
                : "rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"}


                onClick={() => {
                  filterCourseByClass("COLLEGE")
                  toggleTab(8)
                }}>College Students</button>
                         <button type="button" className={toggle === 9 ? "  rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out active-tab"
                : "rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"}

                onClick={() => {
                  filterCourseByClass("PROFESSIONALS")
                  setToggle(9)
                }}


              >Professionals</button>
              {/* <button type="button" className={toggle === 9 ? "  rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out active-tab"
                : "rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"}
                onClick={() => {
                  filterCourseByClass("9")
                  toggleTab(9)
                }}>Class 9</button>
              <button type="button" className={toggle === 10 ? "  rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out active-tab"
                : "rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"}
                onClick={() => {
                  filterCourseByClass("10")
                  toggleTab(10)
                }}>Class 10</button> */}
            </div>
          </div> 


          <div class="row justify-content-center text-center">
            {
              toggle===9 ?<div className='my-6'>
<h1 className='text-black text-2xl'>Courses Coming Soon...</h1>
              </div> :
              item.map((data) => {
                return (



                  <div class="col-lg-4 col-md-6 col-sm-12  mt-4">
                      <div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
		<a href="#">
			<img class="rounded-t-lg p-8" src={data.image} style={{height:"250px"}} />
        </a>
			<div class="px-2 pb-5">
				<a href="">
					<h3 class="text-gray-900 font-semibold text-lg tracking-tight dark:text-white">{data.name}</h3>
				</a>
				<div class="flex items-center text-center mt-2.5 mb-3 px-16 justify-content-center">
					<svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
				</div>
        <div class="flex items-center text-center mt-2.5 mb-3 px-16 justify-content-center">
        <h3 class="text-gray-900 mx-8 font-semibold text-lg tracking-tight dark:text-white"><h1 className='text-4xl'>{data.classes}</h1>classes</h3>
        <h3 class="text-gray-900 mx-8 font-semibold text-lg tracking-tight dark:text-white"><h1 className='text-4xl'>60</h1>min/class</h3>
          </div>
					<h3 class="text-3xl mx-1  font-bold text-gray-900 dark:text-white">99₹/class</h3>
				<div class="flex items-center mt-3 justify-content-center">
          <button 
               
               class="inline-block px-3 m-1 py-2.5 text-white text-sm leading-tight uppercase rounded shadow-md text-white bg-gradient-to-r from-blue-400 to-blue-800 hover:from-pink-500 hover:to-yellow-500  border-0 transition duration-150 ease-in-out rounded"
               
               data-mdb-ripple="true"
               data-mdb-ripple-color="light"
               onClick={()=>{
                 setDetails(data.details)
                openModal()
               }}
               >
               
                Details
                       </button>
                       <NavLink to="/demo">
                       <button 
               
               class="inline-block px-2 py-2.5 m-1 text-white text-sm leading-tight uppercase rounded shadow-md text-white bg-gradient-to-r hover:from-blue-400 hover:to-blue-800 from-pink-500 to-yellow-500  border-0 transition duration-150 ease-in-out rounded"
               
               data-mdb-ripple="true"
               data-mdb-ripple-color="light"
          
               >
               
                Demo Class
                       </button>
                       </NavLink>
                       <NavLink>
                       <button 
               
               class="inline-block px-3 m-1 py-2.5 text-white text-sm leading-tight uppercase rounded shadow-md text-white bg-gradient-to-r from-blue-400 to-blue-800 hover:from-pink-500 hover:to-yellow-500  border-0 transition duration-150 ease-in-out rounded"
               
               data-mdb-ripple="true"
               data-mdb-ripple-color="light"
          
               >
               
               Buy Now
                       </button>
                       </NavLink>
				</div>
			</div>
	</div>

      </div>
               
                )

              })
            }


          </div>
</div>
</section>

{/* //modal */}

<Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
 
        <i onClick={()=>{
          closeModal()
                        setDetails([])
        }} class="fa-solid fa-xmark text-2xl"></i>
       
        <div class="course-learn">
          <div class="course-leranm-tittle">
          <h1 className='text-2xl text-bolder mb-1 text-center' style={{textDecoration:"underline", padding:"3px"}}>Course Description</h1>
            </div>
            <div class="row">
              
              <div class="col-xl-12">
                <div class="course-learn-text f-left">
                  <ul>
                    {
                      details.map((details)=>{
                        return(
                      
                                   <li><i class="fa-solid fa-check"></i>{details.point}</li>
                          
                        )
                      })
                    }
                   
                    </ul>
                    </div>
                    </div>
                    {/* <div class="col-xl-6">
                      {/* <div class="course-leran-text">
                        <ul>
                          <li><i class="fa-solid fa-check"></i>Reinforcement learning upper confidence bound Thompson sampling</li>
                          <li><i class="fa-solid fa-check"></i>Model Selection and Boosting fold cross validation parameter</li>
                          <li><i class="fa-solid fa-check"></i>Use Machine Learning for personal purpose of machine</li>
                          </ul></div> */}
                          {/* </div>  */}
                          </div></div>
      </Modal>

</div>
  


  )
}
