import React from "react";
import './BannerItem.css'

const BannerItem = ({ slide }) => {
  const { id, prev, next, image } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} className="w-full h-full " alt="" />
      </div>
      <div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-1/4 top-1/4">
          <h1 className="lg:text-8xl md:text-5xl text-3xl font-bold text-white">
            One Photographer <br />
            can explain <br />
            the world
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-1/4 w-2/5 top-2/4 my-6">
          <p className="lg:text-2xl md:text-5xl text-xs text-white">
            Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything
          </p>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-20">
        <a href={`#slide${prev}`} className="btn lg:w-10 w-5 btn-circle hover:bg-red-600 mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn lg:w-10 w-5 btn-circle hover:bg-red-600">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
