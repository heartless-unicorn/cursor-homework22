// import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare, faComment } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./style_component/Menu.css";
export default function Menu(response) {
  const [like, Liked] = useState(false);
  const [likes, countLike] = useState(response.likeCount);
  const [repost, Reposted] = useState(false);
  const [reposts, countReposts] = useState(response.repostCount);
  const [comment, Commented] = useState(false);
  const [comments, countComments] = useState(response.commentCount);

  const handleLike = () => {
    Liked((current) => !current);
    like ? countLike(likes - 1) : countLike(likes + 1);
  };
  const handleRepost = () => {
    Reposted((current) => !current);
    repost ? countReposts(reposts - 1) : countReposts(reposts + 1);
  };
  const handleComments = () => {
    Commented((current) => !current);
    comment ? countComments(comments - 1) : countComments(comments + 1);
  };

  return (
    <div className="Menu">
      <div>
        {" "}
        <FontAwesomeIcon
          icon={faHeart}
          className={like ? "button-like liked" : "button-like"}
          onClick={handleLike}
        />
        <span>{likes}</span>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faShare}
          onClick={handleRepost}
          className={repost ? "button-repost reposted" : "button-repost"}
        />
        <span>{reposts}</span>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faComment}
          onClick={handleComments}
          className={comment ? "button-comment commented" : "button-comment"}
        />
        <span>{comments}</span>
      </div>
    </div>
  );
}
