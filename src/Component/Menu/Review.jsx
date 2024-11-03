import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";
import { Rating } from '@smastrom/react-rating'
// import required modules
import { Navigation } from "swiper/modules";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("Review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="bg-slate-500 ">
      <SectionTitle
        name="What our client say"
        title="TESTIMONIALS"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide>
            <div className="flex flex-col items-center my-20">
            <p className="text-white text-xl ">{review.name}</p>
            <p className="text-white text-center ">{review.details}</p>
           
          
            <Rating style={{ maxWidth: 180 }}  value={review.rating} />
            </div>
            
           
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
