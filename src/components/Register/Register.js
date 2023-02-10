import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import OTPInput, { ResendOTP } from "otp-input-react";
import { getOtp, verifyOtp } from '../../action/mobileVerifyAction';
export default function Register() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile]= useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [otp, setOtp]= useState();
  const [otpDisplay, setOtpDisplay]= useState(false);
  const [Type, setType] = useState("password");
  const [Type1, setType1] = useState("password");
  const [verify,setVerify]= useState(false);
  const [otpSent,setOtpSent]= useState(false);


  const handleToogle = () => {
    if (Type === "password") {
      setType("text");
    } else setType("password");
  };
  
  const handleToogle1 = () => {
    if (Type1 === "password") {
      setType1("text");
    } else setType1("password");
  };
  const onVerificationRqst =()=>{
    // && mobile.length()!=10 &&  password.match(/^[A-Za-z]\w{7,14}$/
var pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if(password!=confirmPassword){

        alert("password!=confirmPassword")
        // setOtpDisplay(true)
      }
   
   
      else if(!password.match(pass )){
             
        alert("password not valid");
            }
      else{
              alert("done")
              setOtpDisplay(true)
            }
          
      
    
  

    }

  const submitOtp =()=>{
    verifyOtp(otp).then((res)=>{
      if(res.user){

      setVerify(true)
      }
    })
  }
  

  return (
    <div>{
      
      
      }
<section>

</section>
<section class="h-full gradient-form  md:h-screen">
  <div class="container py-12 px-6 h-full">
    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div class="xl:w-10/12">
        <div class="block bg-white shadow-lg rounded-lg">
          <div class="lg:flex lg:flex-wrap g-0">
          <div id='recaptcha-container'></div>
            <div class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
           
            >
              <div class="text-black px-4 py-6 md:p-12 md:mx-6 hidden md:block">
                
                <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="w-full"
          alt="Phone image"
        />
              </div>
            </div>
            <div class="lg:w-6/12 px-4 md:px-0 pt-4">
              <div class="md:p-12 md:mx-6">
                <div class="text-center">
                  <img
                    class="mx-auto w-24"
                    src="https://firebasestorage.googleapis.com/v0/b/sansaptak-b8665.appspot.com/o/vector%20images%2F24969119-c8f7-4825-9a48-c7f0d8b7c684-removebg-preview.png?alt=media&token=17476b44-4df6-4301-a78b-c5e6d276c65e"
                    alt="LLOGICAL"
                  />
                  <h4 class="text-xl font-semibold mt-1 mb-4 pb-1">we are <b>LLOGICAL</b></h4>
                </div>
{
  ((verify===false) && (otpSent===false)) ?
   
  <div>
            
    <h1 class="mb-2 text-2xl text-center">Verify Your Phone Number</h1>
              <div class="mb-4">
                  <label htmlFor="name" className=" text-black">
                    {/* Phone No */}
                  </label>
                  <PhoneInput
  country={"in"}
  value={mobile}
  onChange={setMobile}
  // localization={'India'}
/>
                  </div>
                  <button
                      class="inline-block px-6 py-2.5 text-white font-medium text-s leading-tight uppercase rounded shadow-md text-white bg-gradient-to-r from-blue-400 to-blue-800 hover:from-pink-500 hover:to-yellow-500  border-0 transition duration-150 ease-in-out w-full mb-3 rounded"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    onClick={()=>{
                    setOtpSent(true)
                    getOtp(mobile)
                    console.log(mobile)
                    }}
                    >Get OTP
                     
                    </button>

  </div>
  : ((verify===false) && (otpSent===true)) ?


  <div>
    <h1 class="mb-2 text-2xl text-center">Verify Your OTP</h1>
              <div class="mb-4">
                  <label htmlFor="name" className=" text-black">
                   OTP
                  </label>
                  <OTPInput value={otp} onChange={setOtp} autoFocus={true} placeholder="000000" OTPLength={6} otpType="number" disabled={false}  />
      <ResendOTP onResendClick={() =>{ console.log("Resend clicked")
       getOtp(mobile)}} />
                  </div>
                  <button
                      class="inline-block px-6 py-2.5 text-white font-medium text-s leading-tight uppercase rounded shadow-md text-white bg-gradient-to-r from-blue-400 to-blue-800 hover:from-pink-500 hover:to-yellow-500  border-0 transition duration-150 ease-in-out w-full mb-3 rounded"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    onClick={()=>{
                      submitOtp()
                    }}
                    >Submit OTP
                     
                    </button>

  </div>

                :<form>
                  <h1 class="mb-2 text-2xl text-center">Create Your Free Account</h1>
                  <div class="mb-4">
                  <label htmlFor="name" className=" text-black">
                    Name
                  </label>
                    <input
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Username"
                      value={name}
                      required
                      onChange={(e)=>{
                        setName(e.target.value)
                       }}
                    />
                  </div>
                  <div class="mb-4">
                  <label htmlFor="email" className=" text-black">
                    Email
                  </label>
                    <input
                      type="email"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="emailId@email.com"
                      required
                      value={email}
                      onChange={(e)=>{
                        setEmail(e.target.value)
                       }}
                    />
                  </div>
               
                  <div class="mb-4">
                  <label htmlFor="password" className=" text-black">
                    Password
                  </label>
                  <div className='d-flex'>
                    <input
                      type={Type}
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput4"
                      required
                      placeholder="Password"
                      value={password}
                      onChange={(e)=>{
                        setPassword(e.target.value)
                       }}
                    />
                 
                     <span
                  class="input-group-text"
                  id="addon-wrapping"
                  onClick={handleToogle}
                >
                  {Type === "password" ? (
                    <i class="fa-solid fa-eye"></i>
                  ) : (
                    <i class="fa-solid fa-eye-slash"></i>
                  )}
                </span>
                </div>
                  </div>
                  <div class="mb-4">
                  <label htmlFor="password" className=" text-black">
                   Confirm Password
                  </label>
                  <div className='d-flex'>
                    <input
                      type={Type1}
                      required
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e)=>{
                        setConfirmPassword(e.target.value)
                       }}
                    />
                  
                     <span
                  class="input-group-text"
                  id="addon-wrapping"
                  onClick={handleToogle1}
                >
                  {Type1 === "password" ? (
                    <i class="fa-solid fa-eye"></i>
                  ) : (
                    <i class="fa-solid fa-eye-slash"></i>
                  )}
                </span>
                </div>
                  </div>
                  <div class={otpDisplay===false ? "hidden" : "mb-4"}>
                  <label htmlFor="password" className=" text-black">
                    Enter OTP
                  </label>
                    <input
                      type="number"
                      class="mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Enter OTP"
                    />
                  </div>
                  <div class="text-center pt-1 mb-12 pb-1">
                    <button
                      class="inline-block px-6 py-2.5 text-white font-medium text-s leading-tight uppercase rounded shadow-md text-white bg-gradient-to-r from-blue-400 to-blue-800 hover:from-pink-500 hover:to-yellow-500  border-0 transition duration-150 ease-in-out w-full mb-3 rounded"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    onClick={()=>{
                      onVerificationRqst()
                    }}
                    >{
                      otpDisplay===false ?"verify mobile":" Verify OTP"
                    }
                     
                    </button>
                   

                   
                    {/* <a class="text-gray-500" href="#!">Forgot password?</a> */}
                  </div>
                  <div class="flex items-center justify-between pb-6">
                    <p class="mb-0 mr-2">Already have an account?</p>
                    <NavLink to ="/login">
                    <button
                      type="button"
                      class="inline-block px-6 py-2 border-2 border-blue-600 text-black-600 font-medium text-lg leading-tight  rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                     Log in
                    </button>
                    </NavLink>
                  </div>
                </form>
                
             

                  }
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
