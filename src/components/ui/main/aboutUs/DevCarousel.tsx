import Slider from "react-slick";
import "../../../../styles/carousel/aboutUsCarousel.css"
import img1 from "../../../../assets/img/carousel/aboutUs/yo.jpeg";
import img2 from "../../../../assets/img/carousel/aboutUs/chris.jpeg";
import img3 from "../../../../assets/img/carousel/aboutUs/jose.jpeg";
import img4 from "../../../../assets/img/carousel/aboutUs/carvajal.png";
import { useState } from "react";

const images = [img1, img2, img3, img4];
function EmptyArrow({ onClick }) {
  return <div></div>;
}
function CenterMode() {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (current, next) => (
      <div className={current === slideIndex ? "dot dot-active" : "dot"}></div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <EmptyArrow />,
          prevArrow: <EmptyArrow />,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            className={index === slideIndex ? "slide slide-active" : "slide"}
            key={index}>
            <img className="size-80" src={img} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CenterMode;
