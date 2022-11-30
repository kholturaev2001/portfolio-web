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
import { useSelector } from "react-redux";

const Testimonials = () => {
  const { allData } = useSelector((state) => state.changeLang);
  const data = Object.values(allData)[0]?.testimonials;
  const people = [
    {
      avatar: bobojon,
      name: data?.bobojonTuraev,
      job: data?.bobojonTuraevJob,
      email: "bobojonturaev@gmail.com",
      review: data?.bobojonTuraevReview
    },
    {
      avatar: lola,
      name: data?.lolaAminjanova,
      job: data?.lolaAminjanovaJob,
      email: "aminilola@mail.ru",
      review: data?.lolaAminjanovaReview
    },
    {
      avatar: nurullo,
      name: data?.nurulloSulaymonov,
      job: data?.nurulloSulaymonovJob,
      email: "sulaimonovnn@softclub.tj",
      review: data?.nurulloSulaymonovReview,
    },
  ];
  return (
    <section id="testimonials">
      <h5>{data?.feedbacks}</h5>
      <h2>{data?.testimonals}</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {people.map(({ avatar, name, review, job, email }, id) => (
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
