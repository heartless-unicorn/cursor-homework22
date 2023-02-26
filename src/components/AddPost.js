import { useDispatch } from "react-redux/es/exports";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddPost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState(null);
  const [profilePictureLink, setprofilePictureLink] = useState(null);
  const [userName, setUserName] = useState(null);
  const [date, setDate] = useState(null);
  const [post, setPost] = useState(null);
  const [pictureLink, setPictureLink] = useState(null);
  const [likesCount, setLikesCount] = useState(null);
  const [commentCount, setCommentCount] = useState(null);
  const [repostsCount, setRepostsCount] = useState(null);
  function addCurrentPost(event) {
    event.preventDefault();
    console.log(name);
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
  }

  return (
    <div>
      <form onSubmit={addCurrentPost}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Your name"
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Profile picture:
          <input
            type="url"
            placeholder="https://example.com"
            onChange={(event) => setprofilePictureLink(event.target.value)}
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
        <label>
          Date:
          <input
            type="date"
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
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
        <label>
          Like count:
          <input
            type="number"
            onChange={(event) => setLikesCount(event.target.value)}
          />
        </label>
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
        <input type="submit" value="Post" />
      </form>
    </div>
  );
}
