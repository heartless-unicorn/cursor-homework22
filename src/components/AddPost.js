import { useDispatch } from "react-redux/es/exports";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style_component/AddPost.css";
export default function AddPost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState(null);
  const [profilePictureLink, setprofilePictureLink] = useState(
    "https://www.pngitem.com/pimgs/m/522-5220445_anonymous-profile-grey-person-sticker-glitch-empty-profile.png"
  );
  const [userName, setUserName] = useState(null);
  const [date, setDate] = useState(null);
  const [post, setPost] = useState(null);
  const [pictureLink, setPictureLink] = useState(
    "https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg"
  );
  const [likesCount, setLikesCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [repostsCount, setRepostsCount] = useState(0);
  const [allGood, isallGood] = useState(true);
  function addCurrentPost(event) {
    event.preventDefault();
    if ((name, userName, date, post)) {
      isallGood(true);

      dispatch({
        type: "ADD_POST",
        payload: {
          name: name,
          icon: profilePictureLink,
          nickname: userName,
          content: post,
          image: pictureLink,
          date: date,
          likes: likesCount,
          comments: commentCount,
          reposts: repostsCount,
        },
      });
      navigate("/posts");
    } else {
      isallGood(false);
    }
  }

  return (
    <div className="AddPost">
      <form onSubmit={addCurrentPost}>
        <div className="profile-info">
          <div className="user-info">
            <label>
              Name:
              <input
                type="text"
                placeholder="Your name"
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label>
              User name:
              <input
                type="text"
                placeholder="@example_12"
                onChange={(event) => setUserName(event.target.value)}
              />
            </label>
          </div>

          <label className="profile-pic">
            Profile picture:
            <input
              type="url"
              placeholder="https://example.com"
              onChange={(event) => setprofilePictureLink(event.target.value)}
            />
          </label>
        </div>
        <div className="post-info">
          <label>
            Your text:
            <textarea onChange={(event) => setPost(event.target.value)} />
          </label>
          <label>
            Picture url:
            <input
              type="url"
              placeholder="https://example.com"
              onChange={(event) => setPictureLink(event.target.value)}
            />
          </label>
        </div>
        <div className="counters">
          <div>
            <label>
              Date:
              <input
                type="date"
                onChange={(event) => setDate(event.target.value)}
              />
            </label>

            <label>
              Like count:
              <input
                type="number"
                onChange={(event) => setLikesCount(event.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Comment count:
              <input
                type="number"
                onChange={(event) => setCommentCount(event.target.value)}
              />
            </label>
            <label>
              Repost count:
              <input
                type="number"
                onChange={(event) => setRepostsCount(event.target.value)}
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Post" className="submit" />
      </form>
      <div className="error">{allGood ? null : "Fill out the fields"}</div>
    </div>
  );
}
