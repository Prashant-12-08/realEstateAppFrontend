import React from 'react';
import { useState } from 'react';

import Style from './ImgSlider.module.css';

function ImgSlider({ images, setImageNumber, imageNum }) {
  //states of a component

  // variable
  let totalImg = images.length;

  //handler function
  function handleImgInc() {
    setImageNumber((num) => (num + 1) % totalImg);
  }

  function handleImgDec() {
    setImageNumber((num) => (num - 1 + totalImg) % totalImg);
  }
  return (
    <div className={Style.imgContainer}>
      {imageNum !== null && (
        <div className={Style.fullSlider}>
          <div className={Style.arrow}>
            <img
              src="/arrow.png"
              alt=""
              style={{ width: '48px' }}
              onClick={handleImgDec}
            />
          </div>
          <div className={Style.imgSlider}>
            <img src={`${images[imageNum]}`} alt="" />
          </div>
          <div className={Style.arrow}>
            <img
              src="/arrow.png"
              alt=""
              onClick={handleImgInc}
              style={{ width: '48px' }}
            />
          </div>
        </div>
      )}
      <div className={Style.bigImg}>
        <img
          src={`${images[0]}`}
          alt="No Image is there"
          onClick={() => setImageNumber(0)}
        />
      </div>
      <div className={Style.close_btn} onClick={() => setImageNumber(null)}>
        X
      </div>
      <div className={Style.smallImg}>
        {images.map((img, index) => {
          if (index === 0) return null;
          if (index > 3) return;

          return (
            <img
              key={index}
              src={`${img}`}
              // src={images[index]}
              alt="small images"
              onClick={() => setImageNumber(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ImgSlider;
