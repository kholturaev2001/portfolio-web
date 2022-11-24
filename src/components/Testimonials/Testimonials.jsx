import React from "react";
import "./testimonials.css";
import lola from "../../assets/lola.png";
import AVTR4 from "../../assetsOne/avatar4.jpg";
import bobojon from "../../assets/BobojonTuraev.png";
import nurullo from "../../assets/NurulloSulaymonov.png";

// import Swiper core and required modules
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      avatar: bobojon,
      name: "Bobojon Turaev",
      job: "HR Manager, UX/UI Designer at Vatan ICT",
      email: "bobojonturaev@gmail.com",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque perferendis officiis ratione odit dolorem magni sit delectus error reiciendis corporis accusamus at reprehenderit, ullam illo dicta atque? Totam, delectus.",
    },
    {
      avatar: lola,
      name: "Lola Aminjanova",
      job: "Professional Photographer",
      email: "lolaaminjanova@gmail.com",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque perferendis officiis ratione odit dolorem magni sit delectus error reiciendis corporis accusamus at reprehenderit, ullam illo dicta atque? Totam, delectus.",
    },
    {
      avatar: nurullo,
      name: "Nurullo Sulaymonov",
      job: "Founder of SoftClub, Middle Backend Developer",
      email: "lolaaminjanova@gmail.com",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque perferendis officiis ratione odit dolorem magni sit delectus error reiciendis corporis accusamus at reprehenderit, ullam illo dicta atque? Totam, delectus.",
    },
    {
      avatar: AVTR4,
      name: "Nana Ama McBrown",
      job: "Manager of UN in Tajikistan",
      email: "lolaaminjanova@gmail.com",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque perferendis officiis ratione odit dolorem magni sit delectus error reiciendis corporis accusamus at reprehenderit, ullam illo dicta atque? Totam, delectus.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Feedbacks</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review, job, email }, id) => (
          <SwiperSlide key={id} className="testimonial">
            <div className="client_avatar">
              <img src={avatar} />
            </div>
            <h5 className="client_name">{name}</h5>
            <p>{job}</p>
            <a href={`mailto:${email}`} target="_blank">
              {email}
            </a>
            <small className="client_review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
