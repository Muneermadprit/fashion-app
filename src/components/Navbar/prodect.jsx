import React, { useEffect } from 'react';
import image1 from '../../assets/product1.jpg';
import image2 from '../../assets/product2.jpg';
import image3 from '../../assets/product3.jpg';
import image4 from '../../assets/product4.jpg';
import image5 from '../../assets/product5.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar } from "react-icons/fa6";


function Product() {
  useEffect(() => {
    AOS.init({
        
        offset:100,
        duration: 800,
    erasing:'ease-in-sine',
     delay:100 });
  }, []);

  const productData = [
    {
      id: 1,
      title: "Woman Ethnic",
      src: image1,
      rating: 4.5,
      color: 'red',
      aosdelay: "200"
    },
    {
      id: 2,
      title: "Fashion Contra",
      src: image2,
      rating: 4.5,
      color: 'red',
      aosdelay: "200"
    },
    {
      id: 3,
      title: "Trendy Joggy",
      src: image3,
      rating: 4.5,
      color: 'red',
      aosdelay: "200"
    },  {
        id: 4,
        title: "Woman Ethnic",
        src: image4,
        rating: 4.5,
        color: 'red',
        aosdelay: "200"
      },
      {
        id: 5,
        title: "Fashion Contra",
        src: image5,
        rating: 4.5,
        color: 'red',
        aosdelay: "200"
      },
    
  ];

  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* header section */}
        <div className='text-center max-w-[600px] mx-auto'>
          <p className='text-sm text-primary'>Top selling products</p>
          <h1 className='text-3xl font-bold'>Products</h1>
          <p className='text-xs text-gray-400'>Good products have more qualities</p>
        </div>
        {/* body section */}
        <div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            {/* card section */}
            {productData.map((data) => (
                <div  data-aos='fade-up' data-aos-delay={data.aosdelay} >
               <div key={data.id} className=' p-2' >
                <img src={data.src} className='shadow-bulge h-[220px] w-[150px] object-cover rounded-md' alt={data.title} />
                <div><h1 className='font-bold text-[18px] mt-4  '>{data.title}</h1>
                <p className='text-sm text-grey-600'>{data.color}</p>
                <div className='flex items-center gap-1'>
                <FaStar className='text-yellow-500' />
                <span>{data.rating}</span>
                </div>
               
                </div>
              </div>
              
                </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
