import React from "react";
import './JoinUs.css'
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
export default function JoinUs() {

    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll:2,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
      };
  return (
    <div className="my-4">
     

     {/* <section class="know-about-platform-sec bg-white py-4"> 
        <div class="container">
          <div class="row know-about-content align-items-center"> 
            <div class="col-md-8 know-about-txt px-24 mt-2 mb-md-0 order-5 order-md-0">
              <h2 class="sec-heading px-12 text-6xl">Want to be a trainer ?</h2>
              <p class="sec-brief mt-3 mb-4">We provide a wide range of courses for the different sectors you can choose from, which suits you perfectly</p>
              <ul class="know-about-points mb-5"> 
                <li class="know-about-point d-flex align-items-center mb-3"><img class="me-3" src="	http://skilify.theuxuidesigner.com/images/svg/check-point.svg" alt="Image Description"/>
                  <h6 class="card-text text-medium-bold">Detail description of each course</h6>
                </li>
                <li class="know-about-point d-flex align-items-center mb-3"><img class="me-3" src="http://skilify.theuxuidesigner.com/images/svg/check-point.svg" alt="Image Description"/>
                  <h6 class="card-text text-medium-bold">Easy to understand language</h6>
                </li>
                <li class="know-about-point d-flex align-items-center"><img class="me-3" src="	http://skilify.theuxuidesigner.com/images/svg/check-point.svg" alt="Image Description"/>
                  <h6 class="card-text text-medium-bold">Simple and easy to learn courses.</h6>
                </li>
              </ul>
              <a class="btn btn-primary" href="courses.html">Apply as a trainer</a>
            </div>
            <div class="col-md-4 know-about-img d-inline-block pe-5 text-center text-md-end">
              <picture> 
                <source srcset="	http://skilify.theuxuidesigner.com/images/webp/know-about.webp" type="image/webp"/><img src="	http://skilify.theuxuidesigner.com/images/webp/know-about.webp" alt="Image Description"/>
              </picture>
            </div>
          </div>
        </div>
      </section> */}



      <section class="pt-24 pb-24 bg-orange-100 apply-crd-sec">
      
<h1 class="sm:text-4xl text-center text-4xl mb-16 font-medium title-font text-gray-900" style={{ fontSize: "50px" }}>Join <span class="why-log" ><b>LLOGICAL</b> </span></h1>
        <div class="container"> 
          <div class="section-container"> 
            <div class="row apply-crd-list">
              <div class="col-md-6">
                <div class="row apply-crd m-1">
                  <div class="apply-crd-img col-lg-2">
                    <picture> 
                      <source srcset="http://skilify.theuxuidesigner.com/images/webp/apply-crd-img.webp" type="image/webp"/><img src="http://skilify.theuxuidesigner.com/images/webp/apply-crd-img.webp" alt="Image Description"/>
                    </picture>
                  </div>
                  <div class="apply-crd-content col-lg-10 mt-4 mt-lg-0">
                    <h3 class="text-4xl mb-2">Become a trainer</h3>
                    <p class="card-text mt-1 mb-4"></p>
                  </div>
                  <ul class="know-about-points mb-5"> 
                <li class="know-about-point d-flex align-items-center mb-3"><img class="me-3" src="	http://skilify.theuxuidesigner.com/images/svg/check-point.svg" alt="Image Description"/>
                  <h6 class="card-text text-medium-bold">Flexible Timing for teachers</h6>
                </li>
                <li class="know-about-point d-flex align-items-center mb-3"><img class="me-3" src="http://skilify.theuxuidesigner.com/images/svg/check-point.svg" alt="Image Description"/>
                  <h6 class="card-text text-medium-bold">A higher pay to our educators who serve LLOGICAL</h6>
                </li>
                <li class="know-about-point d-flex align-items-center"><img class="me-3" src="	http://skilify.theuxuidesigner.com/images/svg/check-point.svg" alt="Image Description"/>
                  <h6 class="card-text text-medium-bold">Teach what you love. We will give you the tools to create a course.</h6>
                </li>
              </ul>
              <a class="btn btn-primary" href="register.html">Apply as trainer</a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row apply-crd m-1">
                  <div class="apply-crd-img col-lg-2">
                    <picture> 
                      <source srcset="http://skilify.theuxuidesigner.com/images/webp/apply-crd-img.webp" type="image/webp"/><img src="http://skilify.theuxuidesigner.com/images/webp/apply-crd-img.webp" alt="Image Description"/>
                    </picture>
                  </div>
                  <div class="apply-crd-content col-lg-10 mt-4 mt-lg-0">
                    <h1 class="mb-2 text-4xl">Are you a school ??</h1> 
                    <p class="card-text mt-1 mb-4"></p>
                  </div>
                  <ul class="know-about-points mb-5"> 
                <li class="know-about-point d-flex align-items-center mb-3"><img class="me-3" src="	http://skilify.theuxuidesigner.com/images/svg/check-point.svg" alt="Image Description"/>
                  <h6 class="card-text text-medium-bold">Get access to top courses for your team</h6>
                </li>
                <li class="know-about-point d-flex align-items-center mb-3"><img class="me-3" src="http://skilify.theuxuidesigner.com/images/svg/check-point.svg" alt="Image Description"/>
                  <h6 class="card-text text-medium-bold">Get affordable courses fees for your students</h6>
                </li>
                <li class="know-about-point d-flex align-items-center"><img class="me-3" src="	http://skilify.theuxuidesigner.com/images/svg/check-point.svg" alt="Image Description"/>
                  <h6 class="card-text text-medium-bold">Offline handsone experiments for your students</h6>
                </li>
              </ul>
              <button class="btn btn-primary" >Apply as school</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
   
  );
}


{/* <div class="d-flex flex-column flex-grow-1 container">
        <div class="d-flex flex-row items-center mt2 ph3 ph0-l overflow-hidden">
          <ul class="breadcrumb list flex flex-row pa0 ma0 f6 flex-nowrap flex-grow-1 overflow-x-auto">
           
         
          </ul> */}
          {/* <script type="application/ld+json"> {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://byjusexamprep.com/"},{"@type":"ListItem","position":2,"name":"Test Series","item":"https://byjusexamprep.com/online-test-series"}]}</script> */}
        {/* </div>
        <div class="flex flex-column ">
         
          <h1 class="title-font  text-center  mb-4 font-medium text-gray-900" style={{fontSize:"40px"}}>Mock Test Series for class 9 &amp; 10</h1> */}
          {/* <span class="paragraph-1-d paragraph-1-m dark-gray-vns mb4 text-center">
            Get mock test series for class 9 &amp; 10.
          </span> */}
          {/* <div class="row items-center justify-content-center bg-white rounded-xl mock">
            
            <div class="col-lg-6 col-md-6 col-sm-6 w-80 text-center">
                <div className="card mock-facility-card p-4">
              <img
                src="https://grdp.co/cdn-cgi/image/quality=100,f=auto/https://gs-post-images.grdp.co/2021/8/group-26-copy-3x-img1629270243575-76.png-rs-high-webp.png"
                class="img-fluid card-img-top "
                alt="latest pattern"
              />
              <p class="text-black  text-center text-lg">
                Answer questions based <br /> on latest exam pattern
              </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 w-80  text-center" >
                <div className="card mock-facility-card p-4">
              <img
                src="https://grdp.co/cdn-cgi/image/quality=100,f=auto/https://gs-post-images.grdp.co/2021/8/group-2-3x-img1629270109256-51.png-rs-high-webp.png"
                class="img-fluid text-center"
                alt="expert faculty"
              />
              <p class="text-black text-center text-lg">
                Attempt exclusive test papers <br /> designed by our experts.
              </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 w-80 text-center">
                <div className="card mock-facility-card p-4">
              <img
                src="https://grdp.co/cdn-cgi/image/quality=100,f=auto/https://gs-post-images.grdp.co/2021/8/group-3-3x-img1629273843250-18.png-rs-high-webp.png"
                class="img-fluid text-center"
                alt="performance analysis"
              />
              <p class="text-black text-center text-lg">
                Get detailed solutions &amp; <br /> performance analysis
              </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 w-80 text-center">
                <div className="card mock-facility-card p-4">
              <img
                src="https://grdp.co/cdn-cgi/image/quality=100,f=auto/https://gs-post-images.grdp.co/2021/8/group-7-3x-img1629274000528-88.png-rs-high-webp.png"
                class="img-fluid text-center"
                alt="all india rank"
              />
              <p class="text-black text-center text-lg">
                Know your All India <br /> rank &amp; score
              </p>
              </div>
            </div>
        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
              <NavLink to="/mocktest">
                <button 
               
                class=" px-6 py-2.5 text-white font-medium text-s leading-tight uppercase rounded shadow-md text-white bg-gradient-to-r from-blue-400 to-blue-800 hover:from-pink-500 text-center hover:to-yellow-500  border-0 transition duration-150 ease-in-out  mb-3 rounded"
                
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
           
                >
                
                  Enroll Now !
                        </button>
                    </NavLink>
        </div>
          </div>
        </div>
      </div>  */}
