import React ,{useState}from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Subject.css"
import { subjects } from '../../data/subjects';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
export default function Subject() {

const [size, setSize] = useState(subjects.length)

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll:size,
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
    <section className='topics my-6 '>
  <h1 class="title-font sm:text-4xl text-center text-3xl mb-4 font-medium text-gray-900">Popular Topics to learn</h1>
    {/* <div className='slicker-div mt-5'>
  <Slider {...settings}>
        {subjects.map((item) => (
          <div >

          <div className="card-box text-center text-white" style={{background:item.color}} >
       <div className="card-top text-center" >
        <h1>{item.title}</h1>
       </div>

            <i class={" mx-4 m-1 text-4xl "+item.linkImg}></i>
            <div className="card-bottom">

              <span className="category ">{item.description}</span>
            </div>
          </div>
        </div>
        ))}
        </Slider>
    </div> */}

<section class="categories-crd-sec-v2 py-8"> 
        <div class=""> 
        <Container>
                
          <div class="sec-content"> 
            <div class="row categories-crd-list justify-content-center text-center"> 
              <div class="col-sm-6 col-lg-4 col-xl-3 mt-4 text-center">
            <NavLink to="/courses">
                <a class="categories-crd categories-crd-gray" >
                  <div class="categories-crd-img-wrap d-flex align-items-center justify-content-center m-auto"><img class="categories-crd-img" src="http://skilify.theuxuidesigner.com/images/svg/pantone.svg" alt="Image Description"/></div>
                  <div class="crd-content">
                    <h3 class="card-title mt-3 mb-2">Web Design</h3>
                  </div></a> </NavLink></div>
              <div class="col-sm-6 col-lg-4 col-xl-3 mt-4 text-center">
                  <NavLink to="/courses">
                <a class="categories-crd categories-crd-orange" >
                  <div class="categories-crd-img-wrap d-flex align-items-center justify-content-center m-auto"><img class="categories-crd-img" src="http://skilify.theuxuidesigner.com/images/svg/monitor.svg" alt="Image Description"/></div>
                  <div class="crd-content">
                    <h3 class="card-title mt-3 mb-2">Web Development</h3>
                  </div></a> </NavLink></div>
              <div class="col-sm-6 col-lg-4 col-xl-3 mt-4 text-center">
                  <NavLink to="/courses">
                <a class="categories-crd categories-crd-blue" >
                  <div class="categories-crd-img-wrap d-flex align-items-center justify-content-center m-auto"><img class="categories-crd-img" src="http://skilify.theuxuidesigner.com/images/svg/shake.svg" alt="Image Description"/></div>
                  <div class="crd-content">
                    <h3 class="card-title mt-3 mb-2">Programming Language</h3>
                  </div></a> </NavLink></div>
          
              {/* <div class="col-sm-6 col-lg-4 col-xl-3 mt-4 text-center"><a class="categories-crd categories-crd-green" href="courses.html">
                  <div class="categories-crd-img-wrap d-flex align-items-center justify-content-center m-auto"><img class="categories-crd-img" src="http://skilify.theuxuidesigner.com/images/svg/briefcase.svg" alt="Image Description"/></div>
                  <div class="crd-content">
                    <h3 class="card-title mt-3 mb-2">Business</h3>
                  </div></a></div>
              <div class="col-sm-6 col-lg-4 col-xl-3 mt-4 text-center"><a class="categories-crd categories-crd-green" href="courses.html">
                  <div class="categories-crd-img-wrap d-flex align-items-center justify-content-center m-auto"><img class="categories-crd-img" src="http://skilify.theuxuidesigner.com/images/svg/volume-up.svg" alt="Image Description"/></div>
                  <div class="crd-content">
                    <h3 class="card-title mt-3 mb-2">Marketing</h3>
                  </div></a></div>
              <div class="col-sm-6 col-lg-4 col-xl-3 mt-4 text-center"><a class="categories-crd categories-crd-blue" href="courses.html">
                  <div class="categories-crd-img-wrap d-flex align-items-center justify-content-center m-auto"><img class="categories-crd-img" src="http://skilify.theuxuidesigner.com/images/svg/camera.svg" alt="Image Description"/></div>
                  <div class="crd-content">
                    <h3 class="card-title mt-3 mb-2">Photography</h3>
                  </div></a></div> */}
              {/* <div class="col-sm-6 col-lg-4 col-xl-3 mt-4 text-center"><a class="categories-crd categories-crd-orange" href="courses.html">
                  <div class="categories-crd-img-wrap d-flex align-items-center justify-content-center m-auto"><img class="categories-crd-img" src="http://skilify.theuxuidesigner.com/images/svg/heart.svg" alt="Image Description"/></div>
                  <div class="crd-content">
                    <h3 class="card-title mt-3 mb-2">Health &amp; Care</h3>
                  </div></a></div> */}
              <div class="col-sm-6 col-lg-4 col-xl-3 mt-4 text-center">
                  <NavLink to="/courses">
                <a class="categories-crd categories-crd-gray">
                  <div class="categories-crd-img-wrap d-flex align-items-center justify-content-center m-auto"><img class="categories-crd-img" src="http://skilify.theuxuidesigner.com/images/svg/cast.svg" alt="Image Description"/></div>
                  <div class="crd-content">
                    <h3 class="card-title mt-3 mb-2">Technology</h3>
                  </div></a> </NavLink></div>
                 
            </div>
          </div>
          </Container>
        </div>
      </section>
    </section>
    )
  }
  