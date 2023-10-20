import React, {useState} from "react";
import  "./Carousel.css";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";


function Carousel({ data }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {data.map((item, index) => {
        return (
          <div
            className={slide === index ? "slide" : "slide slide-hidden"}
            key={index}
          >
            <img src={item.image} />
            <h3 className="textContain">{item.title}</h3>
        </div>
    })}
    <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
    </div>)
          </div>
        );
      })}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
    </div>
  );
}

export default Carousel;
