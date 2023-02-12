import UNIVERSAL from "../config/config.js"
import swal from "sweetalert";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const  login = async (login) =>{

   console.log("login started")
 const response = await fetch(`${UNIVERSAL.BASEURL}/login`, {
    method :"POST",
    headers : {
        "content-type": "application/json",
       
       "requested-timestamp": UNIVERSAL.TIMESTAMP,
      "conversation-id": UNIVERSAL.CONID,
      },

body : JSON.stringify(login)

 });

    const data = await response.json();
  
      if(data.status===200){
        swal({
            title: "Logged In!",
            text: data.message,
            icon: "success",
            button: "Ok!",
          })
          
        localStorage.setItem('auth_token',data.token)
      }
      else{
        swal({
            title: "Login Failed!",
            text:`${data.data} Please create an account first` ,
            icon: "error",
            button: "Retry",
          })
      }
      console.log(data)
    
   
    return (data)
}

export const  register = async (user) =>{

  let phn = user.mobile.substring(2);

  console.log("register started")
  console.log(user)
const response = await fetch(`${UNIVERSAL.BASEURL}/users`, {
   method :"POST",
   headers : {
       "content-type": "application/json",
      
      "requested-timestamp": UNIVERSAL.TIMESTAMP,
     "conversation-id": UNIVERSAL.CONID,
     },

body : JSON.stringify({
  userFullName:user.name,
        userEmail: user.email,
        userPassword: user.password,
        userPhoneNo: phn,
    
       
})

});

   const data = await response.json();
 
     if(data.message==="Registration Successful!!"){
       swal({
           title: "Registration Successful!!",
           text: "You have sussessfully created an account!",
           icon: "success",
           button: "Ok!",
         })
         
      
     }
     else{
       swal({
           title: "Failed!",
           text: data.message,
           icon: "error",
           button: "Retry",
         })
     }
     console.log(data)
   
  
   return (data)
}