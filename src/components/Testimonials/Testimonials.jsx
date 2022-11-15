import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/lola.png";
import AVTR2 from "../../assetsOne/avatar2.jpg";
import AVTR3 from "../../assetsOne/avatar3.jpg";
import AVTR4 from "../../assetsOne/avatar4.jpg";
import {AiFillApple } from 'react-icons/ai'

// import Swiper core and required modules
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: "Lola Aminjanova",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque perferendis officiis ratione odit dolorem magni sit delectus error reiciendis corporis accusamus at reprehenderit, ullam illo dicta atque? Totam, delectus.",
    },
    {
      avatar: AVTR2,
      name: "Shatta Wale",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque perferendis officiis ratione odit dolorem magni sit delectus error reiciendis corporis accusamus at reprehenderit, ullam illo dicta atque? Totam, delectus.",
    },
    {
      avatar: AVTR3,
      name: "Kwame Despite",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque perferendis officiis ratione odit dolorem magni sit delectus error reiciendis corporis accusamus at reprehenderit, ullam illo dicta atque? Totam, delectus.",
    },
    {
      avatar: AVTR4,
      name: "Nana Ama McBrown",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque perferendis officiis ratione odit dolorem magni sit delectus error reiciendis corporis accusamus at reprehenderit, ullam illo dicta atque? Totam, delectus.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Positive Feedback And Awards</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, id) => (
          <SwiperSlide key={id} className="testimonial">
            <div className="client_avatar">
              <img src={avatar} />
            </div>
            <h5 className="client_name">{name}</h5>
            <p >Founder of Apple <span><AiFillApple /></span></p>
            <small className="client_review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
