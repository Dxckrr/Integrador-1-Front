import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props ) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        transform: "translateX(-40px)",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        transform: "translateX(40px)",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

function CustomArrows() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          transform: "translateY(-40px)",
          zIndex: "1",
        }}>
        <ul style={{ margin: 0, padding: 0, listStyleType: "none" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "12px",
          height: "12px",
          backgroundColor: "black",
          borderRadius: "9999px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        className="custom-dot"
      >
      </div>
    )
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="">
          <img src="/src/assets/img/carousel/img_1_carousel.png" alt="" />
        </div>
        <div>
          <img src="/src/assets/img/carousel/img_2_carousel.png" alt="" />
        </div>
        <div>
          <img src="/src/assets/img/carousel/img_3_carousel.png" alt="" />
        </div>
        <div>
          <img
            src="/src/assets/img/carousel/img_4_carousel.png"
            alt=""
          />
        </div>
      </Slider>

      <style>{`
        .slick-dots li.slick-active .custom-dot {
          background-color: #0f6aef  !important;
        }
      `}</style>
    </div>
  );
}

export default CustomArrows;
