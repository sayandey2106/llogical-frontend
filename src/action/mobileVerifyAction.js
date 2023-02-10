import {RecaptchaVerifier ,signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../config/firebase-config";




function onCaptchaVerify(){
  if(!window.recaptchaVerifier){
  
    console.log("captcha verify")
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log("captcha verified")
        // getOtp();
        
      }
    }, auth);
  }
  }
  
  export function getOtp(phn){
    const phoneNumber = `+${phn}`
    console.log(phoneNumber)
    onCaptchaVerify()
    // const phoneNumber = "+916291267461";
  const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      alert("otp sended")
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      alert(error)
      // ...
    });
  }

  export function verifyOtp(otp){
    window.confirmationResult.confirm(otp).then(async(res)=>{
        console.log(res);
        alert("verified");
        return res
    }).catch((err)=>{
      console.log(err)
    })

  }
