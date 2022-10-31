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
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        arrows: false,
        fade: true,
        cssEase: "ease-out",
    };

    return (
      <Slider className="mv_slider" {...settings}>
            <div>
                <Image className="pc_only" src="/images/top/mv_bg01.webp" width='auto' height='100%'/>
                <Image className="sp_only" src="/images/top/mv_bg01_sp.webp" width='auto' height='100%'/>
            </div>
            <div>
                <Image className="pc_only" src="/images/top/mv_bg02.webp" width='auto' height='100%'/>
                <Image className="sp_only" src="/images/top/mv_bg02_sp.webp" width='auto' height='100%'/>
            </div>
            <div>
                <Image className="pc_only" src="/images/top/mv_bg03.webp" width='auto' height='100%'/>
                <Image className="sp_only" src="/images/top/mv_bg03_sp.webp" width='auto' height='100%'/>
            </div>
      </Slider>
    );
  }