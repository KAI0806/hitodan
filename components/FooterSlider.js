import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Image } from "@chakra-ui/react";

export default function FooterSlider() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 14000,
        autoplaySpeed: 0,
        slidesToShow: 2.7,
        slidesToScroll: 1,
        pauseOnHover: false,
        arrows: false,
        cssEase: 'linear',
        responsive:[
            {
              breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  speed: 15000,
              }
            },
        ],
    };

    return (
      <Slider className="footer_slider" {...settings}>
            <div>
                <Image src="/images/common/footer_slide.webp" alt="串" width='auto' height='100%'/>
            </div>
            <div>
                <Image src="/images/common/footer_slide.webp" alt="串" width='auto' height='100%'/>
            </div>
            <div>
                <Image src="/images/common/footer_slide.webp" alt="串" width='auto' height='100%'/>
            </div>
      </Slider>
    );
}