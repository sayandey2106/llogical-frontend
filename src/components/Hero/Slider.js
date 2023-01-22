import React from 'react'
import HeroSlider, {Slide} from "hero-slider"
import './Hero.css'
export default function Slider() {
    // const img1="https://firebasestorage.googleapis.com/v0/b/sansaptak-b8665.appspot.com/o/Course%2FBrandMaker_09012023_082149.png?alt=media&token=0ef241e2-7214-4dd9-9751-622992fac101";
    const img2="https://firebasestorage.googleapis.com/v0/b/sansaptak-b8665.appspot.com/o/Course%2FBrandMaker_09012023_090312.png?alt=media&token=62df7daa-3f4f-4e0f-8fad-271d94de11b3";
    const img3="https://firebasestorage.googleapis.com/v0/b/sansaptak-b8665.appspot.com/o/Course%2FBrandMaker_09012023_091107.png?alt=media&token=c3399163-ff16-48b4-bf3f-b437ce30a91c";
    const img4="https://firebasestorage.googleapis.com/v0/b/sansaptak-b8665.appspot.com/o/Course%2FBrandMaker_09012023_091157.png?alt=media&token=2bd68f48-b2c4-480c-ab48-32e6d9085b35";
    const img5="https://firebasestorage.googleapis.com/v0/b/sansaptak-b8665.appspot.com/o/Course%2FBrandMaker_09012023_091431.png?alt=media&token=dcbe91db-bccf-4398-b768-e349806473e0";
    const img6="https://firebasestorage.googleapis.com/v0/b/sansaptak-b8665.appspot.com/o/Course%2FBrandMaker_09012023_091447.png?alt=media&token=7d38fa4a-d23b-415b-b0f9-60f0794dcab4";
  return (
    <div>
  {/* <AwesomeSlider animation="cubeAnimation">
    <div data-src="https://images.livemint.com/img/2021/09/06/1600x900/BYJU's_1617611925125_1630937205472.jpg" />
    <div data-src="https://images.moneycontrol.com/static-mcnews/2019/06/Byjus.jpg?impolicy=website&width=770&height=431" />
    <div data-src="https://deshicompanies.com/wp-content/uploads/2020/10/BYJUs.jpg" />
  </AwesomeSlider> */}

<HeroSlider
    slidingAnimation="left to right"
    orientation="horizontal"
    initialSlide={1}
    autoplay="true"
    autoplayDuration="2000"
    style={{
        backgroundColor:"rgba(0,0,0,0)"
    }}
    settings={{
        slideDuration:250,
        slideDelay:100,
        shouldAutoplay:true,
        shouldDisplayButtons:true,
        autoplayDuration:2000,
        
        // height:"85vh"
    }}
    // height="85vh"
>
    {/* <Slide
     className='img-fluid'
    background={{
        backgroundImageSrc:img1,
        backgroundAttachment:"fixed",
        height:"85vh"
    }}/> */}
        <Slide
        className='img-fluid'
    background={{
        backgroundImageSrc:img2 ,
        backgroundAttachment:"fixed",
        height:"85vh"
    }}/>
        <Slide
         className='img-fluid'
    background={{
        backgroundImageSrc:img3,
        backgroundAttachment:"fixed",
        height:"85vh"
    }}
    
   />
     <Slide
         className='img-fluid'
    background={{
        backgroundImageSrc:img4,
        backgroundAttachment:"fixed",
        height:"85vh"
    }}
    
   />
     <Slide
         className='img-fluid'
    background={{
        backgroundImageSrc:img5,
        backgroundAttachment:"fixed",
        height:"85vh"
    }}
    
   />
     <Slide
         className='img-fluid'
    background={{
        backgroundImageSrc:img6,
        backgroundAttachment:"fixed",
        height:"85vh"
    }}
    
   />
     
</HeroSlider>

    </div>
  )
}
