import React from 'react'
import image1 from '../../assets/shoping1.png'
import image2 from '../../assets/shoping2.png'
import image3 from '../../assets/shoping3.png'
import Slider from 'react-slick'

function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  };

  return (
    <div className='relative overflow-hidden sm:min-h-[650px] bg-grey-100 flex justify-center items-center'>
      <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl -rotate-45 -z-9'></div>
      {/* hero section */}
      <div className='container pb-8 sm:pb-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center justify-center'>
          {/* text content section */}
       
          <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 sm:mx-[300px]'>
          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-primary'>75% Off</h1>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-primary' >Grand Sale!!!</h1>
            <p className='text-sm font-bold'>
              Muneer The pro developer with one year hands-on experience in the field of 
            </p>
            <button className='w-[200px] bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 p-5 rounded text-white hover:text-black font-bold shadow-white mx-20'>
              ORDER NOW
            </button>
          </div>
          <div className='order-1 sm:order-2 sm:pb-[140px]  h-[500px]'>
            <Slider  {...settings}>
              <div className='animate-fade h-[800px] pt-10'>
                <img src={image1} className='w-[250px] sm:scale-125 object-contain mx-auto' alt="Fashion item 1" />
              </div>
              <div className='animate-fade  h-[800px] pt-10'>
                <img src={image2} className='w-[250px] sm:scale-125 object-contain mx-auto' alt="Fashion item 2" />
              </div>
              <div className='animate-fade'>
                <img src={image3} className='w-[290px] sm:scale-125 object-contain mx-auto' alt="Fashion item 3" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
