// import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare, faComment } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Menu(response) {
  const [like, Liked] = useState(false);
  const [likes, countLike] = useState(response.likeCount);

  const handleLike = (event) => {
    Liked((current) => !current);
    like ? countLike(likes - 1) : countLike(likes + 1);
  };

  return (
    <div className="Menu">
      <span>
        {" "}
        <FontAwesomeIcon
          icon={faHeart}
          className={like ? "button liked" : "button"}
          onClick={handleLike}
        />
        <span>{likes}</span>
      </span>
      <FontAwesomeIcon icon={faShare} className="button" />
      <span>{response.repostCount}</span>
      <FontAwesomeIcon icon={faComment} className="button" />
    </div>
  );
}
