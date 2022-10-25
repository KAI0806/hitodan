import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Image } from "@chakra-ui/react";

export default function mvSlider() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        arrows: false,
        fade: true,
        cssEase: "ease-out",
    };

    return (
      <Slider {...settings}>
            <div>
                <Image src="/images/top/mv_bg01.webp" width='100%' height='auto'/>
            </div>
            <div>
                <Image src="/images/top/mv_bg02.webp" width='100%' height='auto'/>
            </div>
            <div>
                <Image src="/images/top/mv_bg03.webp" width='100%' height='auto'/>
            </div>
      </Slider>
    );
  }