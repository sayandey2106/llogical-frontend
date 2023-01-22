export const  submitForm = async () =>{
   
    // const signUpObj = {signup }
  
    // console.warn(form);
 const response = await fetch("https://llogical-backend.onrender.com/api/form", {
    method :"POST",

body : JSON.stringify({
    
        name:"tatai",
        email:"ds@ds",
        mobile:123567890,
        class:6,
        course:"abcd",
        board:"wb",
        addres:"xyz",
        school:"abc"
    
})

 });

    const data = await response.json();
  
      alert(data)
      console.log(data)
    
   
    return (data)
}