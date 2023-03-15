import UNIVERSAL from "../config/config";
import swal from "sweetalert";

export const  createDemoClass = async (demo) =>{


    console.log(demo)
  const response = await fetch(`${UNIVERSAL.BASEURL}demoClass`, {
     method :"POST",
     headers : {
         "content-type": "application/json",
        
        "requested-timestamp": UNIVERSAL.TIMESTAMP,
       "conversation-id": UNIVERSAL.CONID,
       },
  
  body : JSON.stringify({
    
        name : demo.name,
                   email: localStorage.getItem('user_email'),
                   grade : demo.grade,
                   date : demo.dateString,
                   time : demo.time,
                   school : demo.school,
                   board : demo.board,
                   address :demo.address,
                   mobileNo: localStorage.getItem('user_phone')
                  
   
      
         
  })
  
  });
  
     const data = await response.json();
   
       if(data.data){
         swal({
             title: "Demo Class Registration Successful!!",
             text: "You have sussessfully requested a demo class!",
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