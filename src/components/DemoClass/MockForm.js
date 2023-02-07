import React, { useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { submitForm } from "../../action/form";
import { createLink } from "./zoomLink";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { courseData } from "../../data/course";
import emailjs from "@emailjs/browser";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import swal from "sweetalert";
export default function MockForm() {

  const [grade, setGrade] = useState("9");

  const submitForm = () => {
    emailjs
      .sendForm(
        "service_9n1fvi5",
        "template_28l5ew7",
        form.current,
        "nj5KWYvPIekaP8kSr"
      )
      .then(
        (result) => {
          result.text === "OK"
            ? swal({
              title: "Submitted!",
              text: "Requested mock test successfully!",
              icon: "success",
              button: "Ok!",
            })
            : swal({
              title: "Failed!",
              text: "Please retry!",
              icon: "error",
              button: "Retry",
            });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="mt-1 text-black">
                      Mobile No
                    </label>
                    <input
                      name="mobile"
                      type="number"
                      autoComplete="current-password"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white"
                      placeholder="Mobile"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mt-1 text-black">
                      Email
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white"
                      placeholder="Email address"
                    />
                  </div>
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

                      <option value="9" selected>9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="password" className="mt-1 text-black">
                      Schhol Name
                    </label>
                    <input
                      name="school"
                      type="text"
                      autoComplete="current-password"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white"
                      placeholder="School name"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="mt-1 text-black">
                      Address
                    </label>
                    <input
                      name="address"
                      type="text"
                      autoComplete="current-password"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white"
                      placeholder="Address"
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
                  >
                    {/* <option selected value="0">Select Board</option> */}
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>

                    <option value="STATE">STATE</option>
                  </select>
                </div>

                <label htmlFor="date" className=" text-black">
                  Select Date
                </label>

                <div className="mt-1">
                  <input
                    id="date"
                    name="date"
                    type="date"

                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white"
                    placeholder="date"
                  />
                </div>
                <div>
                  <label htmlFor="password" className=" text-black">
                    Select Time
                  </label>

                  <input
                    id="time"
                    name="time"
                    type="time"

                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white"
                    placeholder="time"
                  />
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
