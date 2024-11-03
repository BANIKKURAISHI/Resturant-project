import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
const TestimonialSlide = ({item}) => {
    const {name,details,rating}=item
    return (
        <div>
           <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        
      </Swiper>
      <SwiperSlide>
            <div cla>
                <p className=''>{name}</p>
               <p>{details}</p>
               <p>{rating}</p>
            </div>
        </SwiperSlide>
        </div>
    );
};

export default TestimonialSlide;