import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./TestimonialsSlider.css";

export default function TestimonialsSlider() {

   const testimonials = [
     {
       name: "EMILIANO AQUILANI",
       content:
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi obcaecati cumque voluptates perspiciatis, totam quae? Illo, facilis cumque deserunt velit placeat ipsa eos numquam modi adipisci est dolore illum voluptatibus?",
       image:
         "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg",
     },
     {
       name: "ANNA ITURBE",
       content:
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi obcaecati cumque voluptates perspiciatis, totam quae? Illo, facilis cumque deserunt velit placeat ipsa eos numquam modi adipisci est dolore illum voluptatibus?",
       image:
         "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg",
     },
     {
       name: "LARA ATKINSON",
       content:
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi obcaecati cumque voluptates perspiciatis, totam quae? Illo, facilis cumque deserunt velit placeat ipsa eos numquam modi adipisci est dolore illum voluptatibus?",
       image:
         "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg",
     },
     {
       name: "IAN OWEN",
       content:
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi obcaecati cumque voluptates perspiciatis, totam quae? Illo, facilis cumque deserunt velit placeat ipsa eos numquam modi adipisci est dolore illum voluptatibus?",
       image:
         "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg",
     },
     {
       name: "MICHAEL TEDDY",
       content:
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi obcaecati cumque voluptates perspiciatis, totam quae? Illo, facilis cumque deserunt velit placeat ipsa eos numquam modi adipisci est dolore illum voluptatibus?",
       image:
         "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg",
     },
   ];
  
  
  return (
    <>
      {" "}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        autoplay={{
          disableOnInteraction: true,
        }}
        initialSlide={1}
        className="swiper-wrapper"
      >
        {testimonials.map((testim, i) => (
          <SwiperSlide className="swiper-slide" key={i}>
            <div className="swiper-image">
              <div className="testimonials_rate d-flex flex-column">
                <span>{testim.name}</span>
                <span>
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z"
                      fill="#F1AF07"
                    />
                  </svg>
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z"
                      fill="#F1AF07"
                    />
                  </svg>
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z"
                      fill="#F1AF07"
                    />
                  </svg>
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z"
                      fill="#F1AF07"
                    />
                  </svg>
                </span>
              </div>
              <span className="test_description">{testim.content}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
