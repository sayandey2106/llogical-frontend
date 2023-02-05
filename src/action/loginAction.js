import UNIVERSAL from "../config/config.js"
import swal from "sweetalert";


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
            title: "Failed!",
            text: data.message,
            icon: "error",
            button: "Retry",
          })
      }
      console.log(data)
    
   
    return (data)
}