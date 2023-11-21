import "./index.css";

import userPhoto from "../../public/userPhoto.png";

export default function Contact({
  name,
  image,
  response,
  restime,
  info,
  phone,
}) {
  return (
    <div className="title">
      <div className="user__box">
        <div className="user">
          <img src={userPhoto} width={80} height={80} alt={image}></img>
        </div>
        <div className="user__name">
          <h1 className="title__text">Host - {name}</h1>

          <div className="title__sub-block">
            <span className="title__sub-value">{phone}</span>

            <span className="title__sub-value">{restime}</span>

            <span className="title__sub-value">
              {response} % percentage of response speed
            </span>
          </div>
        </div>
      </div>
      {info}
    </div>
  );
}
