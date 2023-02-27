import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SinglePost from "../components/SinglePost";
import "./style_component/Posts.css";

export default function Posts() {
  const posts = useSelector((state) => state);

  return (
    <div className="Posts">
      <div>
        <Link to="/addpost" className="add-link">
          AddPost
        </Link>
      </div>
      {posts.map((element, id) => {
        return <SinglePost data={element} key={id} />;
      })}
    </div>
  );
}
