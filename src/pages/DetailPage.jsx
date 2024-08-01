import React from 'react';
import style from './DetailPage.module.css';
import { useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import Details from '../components/Details';
import DetailPageFetures from '../components/DetailPageFetures';

function DetailPage() {
  const details = useLoaderData().data.post;
  const [imageNum, setImageNumber] = useState(null);
  // details.images = details.images.map((img) => {
  //   let ext = 'jpg';
  //   let imgId = img;
  //   const size = img.split('/').length;
  //   if (size > 1) {
  //     const filterimg = img.split('/');
  //     const imgExt = filterimg[filterimg.length - 1].split('.');
  //     imgId = imgExt[0];
  //     ext = imgExt[1];
  //   }
  //   return imgId;
  // });

  return (
    <div className={style.detailPage}>
      <Details
        postDetails={details}
        imageNum={imageNum}
        setImageNumber={setImageNumber}
      />
      <DetailPageFetures postDetails={details} imageNum={imageNum} />
    </div>
  );
}

export default DetailPage;
