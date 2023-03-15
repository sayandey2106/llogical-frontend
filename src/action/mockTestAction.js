import UNIVERSAL from "../config/config";
import swal from "sweetalert";

export const  createMockTest = async (test) =>{


    console.log("register started")
    console.log(test)
  const response = await fetch(`${UNIVERSAL.BASEURL}mockTest`, {
     method :"POST",
     headers : {
         "content-type": "application/json",
        
        "requested-timestamp": UNIVERSAL.TIMESTAMP,
       "conversation-id": UNIVERSAL.CONID,
       },
  
  body : JSON.stringify({
    
        name : test.name,
                   email: localStorage.getItem('user_email'),
                   grade : test.grade,
                   date : test.dateString,
                   time : test.time,
                   school : test.school,
                   board : test.board,
                   address :test.address,
                   mobileNo: localStorage.getItem('user_phone')
                  
   
      
         
  })
  
  });
  
     const data = await response.json();
   
       if(data.data){
         swal({
             title: "Mock Test Registration Successful!!",
             text: "You have sussessfully requested a mock test!",
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