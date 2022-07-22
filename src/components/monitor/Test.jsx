import React from "react";
import Slider from "react-slick";

const Test = () => {
  const settings = {
    customPaging: function (i) {
      return <div>Hello world</div>;
    },
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className="h-screen">
      <h2>Vertical Mode</h2>
      <Slider {...settings}>
        <div className="w-screen h-screen bg-red-500 my-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          odit cum aliquid. Eaque quasi itaque aspernatur non quam doloremque,
          eius laborum minima quas explicabo ea blanditiis iusto iste incidunt
          porro.
        </div>
        <div className="w-screen h-screen bg-red-500 my-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          odit cum aliquid. Eaque quasi itaque aspernatur non quam doloremque,
          eius laborum minima quas explicabo ea blanditiis iusto iste incidunt
          porro.
        </div>
        <div className="w-screen h-screen bg-red-500 my-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          odit cum aliquid. Eaque quasi itaque aspernatur non quam doloremque,
          eius laborum minima quas explicabo ea blanditiis iusto iste incidunt
          porro.
        </div>
        <div className="w-screen h-screen bg-red-500 my-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          odit cum aliquid. Eaque quasi itaque aspernatur non quam doloremque,
          eius laborum minima quas explicabo ea blanditiis iusto iste incidunt
          porro.
        </div>
        <div className="w-screen h-screen bg-red-500 my-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          odit cum aliquid. Eaque quasi itaque aspernatur non quam doloremque,
          eius laborum minima quas explicabo ea blanditiis iusto iste incidunt
          porro.
        </div>
        <div className="w-screen h-screen bg-red-500 my-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          odit cum aliquid. Eaque quasi itaque aspernatur non quam doloremque,
          eius laborum minima quas explicabo ea blanditiis iusto iste incidunt
          porro.
        </div>
      </Slider>
    </div>
  );
};
export default Test;
