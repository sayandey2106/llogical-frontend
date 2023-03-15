import React, { useRef,useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { submitForm } from "../../action/form";
import { createLink } from "./zoomLink";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { courseData } from "../../data/course";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import "./Form.css"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import swal from "sweetalert";
import { createMockTest } from "../../action/mockTestAction";


export default function MockForm() {

  const [grade, setGrade] = useState("9");
  const [date, setDate] = useState("");
  const [name,setName]= useState("");
  const [address, setAddress] = useState();
  const [time, setTime]=useState("4PM-5PM");
  const [school, setSchool]=useState();
  const [board, setBoard]=useState("CBSE");

  let dateString = date.toString()
  const test ={dateString,time,address,school,board,grade,name}

  const navigate = useNavigate();
  const submitForm = () => {
    // emailjs
      // .sendForm(
      //   "service_9n1fvi5",
      //   "template_28l5ew7",
      //   form.current,
      //   "nj5KWYvPIekaP8kSr"
      // )
      // .then(
      //   (result) => {
      //     result.text === "OK"
      //       ? swal({
      //         title: "Submitted!",
      //         text: "Requested mock test successfully!",
      //         icon: "success",
      //         button: "Ok!",
      //       })
      //       : swal({
      //         title: "Failed!",
      //         text: "Please retry!",
      //         icon: "error",
      //         button: "Retry",
      //       });
      //     console.log(result.text);
      //   },
      //   (error) => {
      //     console.log(error.text);
      //   }
      // );


      createMockTest(test)
  };
  useEffect(() => {
    if(!localStorage.getItem('auth_token')){
      swal({
        title: "Please login !",
      text: "Please login to request mock tests! If you don't have any account, please create it!",
        icon: "error",
        button: "Close",
      })
      navigate('/login');
    }
  }, [])
  const form = useRef();

  return (
    <div>
      <Container className="">
        <div className="row">
          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 bg-white p-5 rounded-md">
              <div>
                <img
                  className="mx-auto h-16 w-auto"
                  src="https://firebasestorage.googleapis.com/v0/b/sansaptak-b8665.appspot.com/o/vector%20images%2F24969119-c8f7-4825-9a48-c7f0d8b7c684-removebg-preview.png?alt=media&token=17476b44-4df6-4301-a78b-c5e6d276c65e"
                  alt="Your Company"
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Submit Your Details
                </h2>
            
              </div>
              <form
                ref={form}
                className="mt-8 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  submitForm();
                }}
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label htmlFor="email-address" className="mt-1 text-black">
                      Student Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white"
                      onChange={(e)=>{
                        setName(e.target.value)
                      }}
                    />
                  </div>
                  {/* <div>
                    <label htmlFor="password" className="mt-1 text-black">
                      Mobile No
                    </label>
                    <input
                      name="mobile"
                      type="number"
                      autoComplete="current-password"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white"
                     
                    />
                  </div> */}
                  {/* <div>
                    <label htmlFor="email" className="mt-1 text-black">
                      Email
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white"
                     
                    />
                  </div> */}
                  <div className="my-2">
                    <label htmlFor="grade" className="mt-1 text-black">
                      Select Grade
                    </label>
                    <select
                      class="form-select appearance-none 
            block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
   
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label="Default select example"
                      name="grade"
                      required
                      onChange={(e) => {
                        setGrade(e.target.value)
                      }}
                    >

                      <option value="9" >9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="password" className="mt-1 text-black">
                      School Name
                    </label>
                    <input
                      name="school"
                      type="text"
                      autoComplete="school name"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white"
                      onChange={(e)=>{
                        setSchool(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="mt-1 text-black">
                      Address
                    </label>
                    <textarea
                      name="address"
                      type="text"
                      autoComplete="address"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white"
                      onChange={(e)=>{
                        setAddress(e.target.value)
                      }}
                    />
                  </div>
                </div>
                {/* <div>
                  <label htmlFor="password" className="mt-1 text-black">
                    Select Course
                  </label>
                  <select
                    class="form-select appearance-none
            block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    name="course"
                    required
                  value={grade}
                  >{
                      (grade === "9" || grade === "10") ?
                

                    <option selected value="BOARD">
                    BOARD Exam Preperation
                  </option>
                  
                    :
                  
                    <>
                      <option selected value="BOARD">
                    BOARD Exam Preperation
                  </option>
                    <option value="JEE">JEE Preperation</option>
                    <option value="NEET">NEET Preperation</option>
                    <option value="WBJEE">WBJEE Preperation</option>
                    </>
                    
                  
                  }
                   
                  </select>
                </div> */}
                <div>
                  <label htmlFor="board" className=" text-black">
                    Select Board
                  </label>
                  <select
                    class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    name="board"
                    required
                    onChange={(e)=>{
                      setBoard(e.target.value)
                    }}
                  >
                    {/* <option selected value="0">Select Board</option> */}
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>

                    <option value="STATE">STATE</option>
                  </select>
                </div>

                <div className="mt-3">
                <label htmlFor="date" className=" text-black">
                Select Preffered Date
                </label>

               <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker
    
    minDate={new Date().toISOString().split('T')[0]}
    value={date}
    
    inputFormat="DD/MM/YYYY"
    name="date"
    onChange={(newValue) => {
      setDate(newValue);
    }}

    className="form-select appearance-none
    block
    w-full

    mt-1
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>
          
                </div>
                <div>
                  <label htmlFor="password" className=" text-black">
                    Select Time
                  </label>

                  <select
                    class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    name="board"
                    required
                    onChange={(e)=>{
                      setTime(e.target.value)
                    }}
                  >
                    {/* <option selected value="0">Select Board</option> */}
                    <option value="4PM-5PM"  selected  onChange={(e)=>{
                      setTime(e.target.value)
                    }}>4PM to 5PM</option>
                    <option value="5PM-6PM"    onChange={(e)=>{
                      setTime(e.target.value)
                    }}>5PM to 6PM</option>

                    <option value="6PM-7PM"    onChange={(e)=>{
                      setTime(e.target.value)
                    }}>6PM to 7PM</option>
                    <option value="7PM-8PM"    onChange={(e)=>{
                      setTime(e.target.value)
                    }}>7PM to 8PM</option>
                    <option value="8PM-9PM"    onChange={(e)=>{
                      setTime(e.target.value)
                    }}>8PM to 9PM</option>
                    
                  </select>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
