import React ,{useState}from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Subject.css"
import { subjects } from '../../data/subjects';
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
    <section className='topics my-6'>
  <h1 class="title-font sm:text-4xl text-center text-3xl mb-4 font-medium text-gray-900">Popular Topics to learn</h1>
    <div className='slicker-div mt-5'>
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
    </div>
    </section>
    )
  }
  