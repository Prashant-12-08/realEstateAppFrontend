import style from './Details.module.css';
import ImgSlider from './ImgSlider';
import { Link } from 'react-router-dom';

function Details({ postDetails, setImageNumber, imageNum }) {
  const { userId: user } = postDetails;

  return (
    <div className={style.details}>
      <div className={style.wrapper}>
        <div className={style.top}>
          <ImgSlider
            images={postDetails.images}
            setImageNumber={setImageNumber}
            imageNum={imageNum}
          />
          <div className={style.info}>
            <div className={style.desc}>
              <h1>{postDetails.title}</h1>
              <div className={style.address}>
                <img src="/pin.png" alt="" />
                <span>{postDetails.address}</span>
              </div>
              <p className={style.price}>
                <span>$</span>
                {postDetails.price}
              </p>
            </div>
            <Link to={`/ownerPage/${user.id}`}>
              <div className={style.user}>
                <img
                  className={style.userImg}
                  src={`${user.avatar === 'user_default_img.jpg' ? '/' : ''}${
                    user.avatar
                  }`}
                  alt="avatar"
                />
                <p>{user.name}</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={style.bottom}>{postDetails.desc}</div>
      </div>
    </div>
  );
}

export default Details;
