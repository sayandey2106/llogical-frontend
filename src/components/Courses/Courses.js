import React,{useEffect,useState} from 'react'
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import { courseData } from '../../data/course';
import Slider from '../Hero/Slider';
import '../AboutUs/AboutUs.css'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Courses() {

    const [open, setOpen]= useState(false);
    const [item, setItem]=useState(courseData)
  const [toggle, setToggle]= useState(9);
  const toggleTab=(i)=>{
    setToggle(i)
  }
    const filterCourse =(type)=>{
      const updated = courseData.filter((curr)=>{
        return curr.type===type || curr.class===type
      })
      setItem(updated);
    }
    const filterCourseByClass =(type)=>{
      const updated = courseData.filter((curr)=>{
        return curr.class===type
      })
      setItem(updated);
    }

  return (
    <div>
{/* <Slider/> */}

<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-16 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-4xl font-medium title-font mb-2 text-gray-900" style={{fontSize:"60px"}}>Our Courses</h1>
      {/* <div class="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
        <button class="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Class 10</button>
        <button class="py-1 px-4 focus:outline-none">Class 12 </button>
      </div> */}
    </div>
    <div class="flex items-center justify-center my-3">
  <div class="inline-flex  focus:shadow-lg" role="group">
  <button type="button" className={toggle===9?"  rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xl  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out active-tab"
    : "rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xl  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"}
   
      onClick={()=>{
        setItem(courseData)
        setToggle(9)
      }}
      
      
      >ALL COURSES</button>
   </div>
  </div>
    <div class="flex items-center justify-center m-3">
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
  </div>

  <div class="flex items-center justify-center m-3">
  <div class="inline-flex  focus:shadow-lg " role="group">
    <button type="button" className={toggle===5?"  rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out active-tab"
    : "rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"}
   
      onClick={()=>{
        filterCourseByClass("9")
        setToggle(5)
      }}
      
      
      >Class 9</button>
    <button type="button" className={toggle===6?"  rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out active-tab"
    : "rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"}

       
      onClick={()=>{
        filterCourseByClass("10")
        toggleTab(6)
      }}>Class 10</button>
    <button type="button"  className={toggle===7?"  rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out active-tab"
    : "rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"}
      onClick={()=>{
        filterCourseByClass("11")
        toggleTab(7)
      }}>Class 11</button>
    <button type="button"  className={toggle===8?"  rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out active-tab"
    : "rounded-l m-1  rounded-r px-6 py-2 text-black font-medium  text-xs  bg-white leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"}
      onClick={()=>{
        filterCourseByClass("12")
        toggleTab(8)
      }}>Class 12</button>
  </div>
  </div>


    <div class="row justify-content-center text-center">
{
  item.map((data)=>{
return(

   

      <div class="col-lg-3 col-md-6 col-sm-12 ">
                            <div class="our_solution_category m-4 rounded-l">
                                <div class="solution_cards_box rounded-l">
                                <div class="solution_card rounded">
                                    <div class="hover_color_bubble"></div>
                                    {/* <div class="so_top_icon">
                                  sdfds
                                    </div> */}
                                    <div class="solu_title">
                                    <h3>CLASS {data.class} {data.type}</h3>
                                    </div>
                                    <div class="solu_description text-center px-6 py-3">
                                    <p class="flex items-center text-gray-600 mb-6">
           <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
             </svg>
            </span>Sample Questions
         </p>
         <p class="flex items-center text-gray-600 mb-6">
           <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
             </svg>
            </span>Doubt Clearing
         </p>
         <p class="flex items-center text-gray-600 mb-6">
           <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
             </svg>
            </span>Online Live Classes
         </p>
                                    {/* <button type="button" class="read_more_btn">Read More</button> */}
                                    </div>
                                    <NavLink to="/demo">
                                    <button 
               
                class="btn bg-black text-white" width="60px"
                
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                >
                
                  Book a Demo Class
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

{/* modal div */}
<div>
{open ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
        
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
</div>




 




    </div>
  )
}
