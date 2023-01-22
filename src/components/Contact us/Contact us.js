import React,{useRef} from 'react'
import Container from 'react-bootstrap/esm/Container'
import swal from "sweetalert";
import emailjs from '@emailjs/browser';
export default function Contact () {


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm("service_d1bl3tc","template_17fefup", form.current, "Y84W44yMKqpvMmsF7")
        .then((result) => {
            result.text==="OK"? swal({title:"Submitted!",text:"Thanks for your feedback",icon:"success",button:"Ok!" }) :swal({title:"Failed!",text:"Please retry again!",icon:"error",button:"Retry" })
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
    <div>
        <h1 class="sm:text-4xl text-4xl font-medium title-font mb-2 text-gray-900 text-center" style={{fontSize:"60px", marginTop:"30px"}}>Contact Us</h1>
   <section class="h-full gradient-form  md:h-screen mb-3">
  <div class="container py-12 px-6 h-full">
    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div class="xl:w-10/12">
        <div class="block bg-white shadow-lg rounded-lg">
          <div class="lg:flex lg:flex-wrap g-0">
            <div class="lg:w-6/12 px-4 md:px-0">
              <div class="md:p-12 md:mx-6">
                
                {/* <div class="text-center">
                  <img
                    class="mx-auto w-48"
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    alt="logo"
                  />
                  <h1 class="text-xl font-semibold mt-1 mb-12 pb-1">we are <b>Llogical</b></h1>
                </div> */}

                <form ref={form} onSubmit={sendEmail} className="p-3">
                  <h1 class="my-4 text-2xl">Send us your query. We'll resolve it.</h1>
                  <div class="mb-4">
                    <input
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Name"
                      name="name"
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="email"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Email"
                      name="email"
                      
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="number"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Mobile Number"
                      name="number"
                      required
                    />
                  </div>
                  <div class="mb-4">
                    <textarea
                      type="password"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Message"
                      name="message"
                      cols="200"
                      style={{height:"200px"}}
                    
                    />
                  </div>
                  <div class="text-center pt-1 mb-12 pb-1">
                    <button
                      type="submit"
                      class="inline-block px-6 py-2.5 text-white font-medium text-s leading-tight uppercase rounded shadow-md text-white bg-gradient-to-r from-blue-400 to-blue-800 hover:from-pink-500 hover:to-yellow-500  border-0 transition duration-150 ease-in-out w-full mb-3 rounded"
               
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                  
                    >
                   Submit
                    </button>
                   
                   
                  </div>
                  
                </form>
              </div>
            </div>
            <div
              class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
           
            >
              <div class="text-black px-4 py-6 md:p-12 md:mx-6">
                
                <img
          src="https://firebasestorage.googleapis.com/v0/b/sansaptak-b8665.appspot.com/o/vector%20images%2F3969587.jpg?alt=media&token=8738cfe1-9e62-4bc1-842e-661d48053578"
          class="w-full"
          alt="Phone image"
        />
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
