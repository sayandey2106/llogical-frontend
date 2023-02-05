import React from "react";
import './MockTest.css'
import Slider from "react-slick";
export default function MockTest() {

    
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
      <div class="d-flex flex-column flex-grow-1 container">
        <div class="d-flex flex-row items-center mt2 ph3 ph0-l overflow-hidden">
          <ul class="breadcrumb list flex flex-row pa0 ma0 f6 flex-nowrap flex-grow-1 overflow-x-auto">
           
         
          </ul>
          {/* <script type="application/ld+json"> {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://byjusexamprep.com/"},{"@type":"ListItem","position":2,"name":"Test Series","item":"https://byjusexamprep.com/online-test-series"}]}</script> */}
        </div>
        <div class="flex flex-column ">
         
          <h1 class="title-font  text-center  mb-4 font-medium text-gray-900" style={{fontSize:"45px"}}>Mock Test Series</h1>
          {/* <span class="paragraph-1-d paragraph-1-m dark-gray-vns mb4 text-center">
            Get mock test series for class 9 &amp; 10.
          </span> */}
          <div class="row items-center justify-content-center ">
            
            <div class="col-lg-6 col-md-6 col-sm-6 w-80 text-center ">
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
            <div class="col-lg-6 col-md-6 col-sm-6 w-80 text-center ">
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
            <div class="col-lg-6 col-md-6 col-sm-6 w-80 text-center ">
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
          </div>
        </div>
      </div>
    </div>
  );
}
