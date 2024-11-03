import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionTitle from './../SectionTitle';

const Category = () => {
    return (
          <section>
            <div className='bg-violet-400'>
            <SectionTitle
          name={"9 am to 5 pm every day"}
          title={'All kinds of Category Which you need'}>
        </SectionTitle>
            </div>
        
          <div>
         <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
          <SwiperSlide>
          <img src="https://i.ibb.co.com/zFt3NGk/burger-with-melted-cheese.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/r7mCLyH/glass-orange-juice-with-leaf-top-it-328859-489.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img className='h-[427px]' src="https://i.ibb.co.com/L1gSrNj/da50251e367fd4b817a683b1326b841a.jpg" alt="" />
        </SwiperSlide>
       
       
        <SwiperSlide>
          <img src="https://i.ibb.co.com/WGjjXwb/twb-post-30-july-copy-1024x1024.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[427px]' src="https://i.ibb.co.com/VSQHDXD/a-vibrant-and-mouthwatering-image-of-suya-a-belove-6gs0-CNi-DRYqi-Q2-Zmas-DMc-Q-ua-X-D6n-HQXm-Nun1-H.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[427px]' src="https://i.ibb.co.com/pv6TWkJ/hyderabadi-biryani-recipe-chicken-500x375.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/ySTM1kK/tiramisu-cheese-cake-plate-237803-1606.jpg" alt="" />
        </SwiperSlide>
        
        <SwiperSlide><img className='h-[427px] w-[427px]' src="https://i.ibb.co.com/F8jwpxm/Chettinad-fish-fry-1-B.jpg" alt="" /></SwiperSlide>
         </Swiper> 
         </div> 
         </section>
       
      
    );
};

export default Category;