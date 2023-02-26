import { useSelector } from "react-redux";
import SinglePost from "../components/SinglePost";

export default function Posts() {
  let posts = useSelector((state) => state);

  return (
    <div>
      Posts
      {posts.map((element, id) => {
        return <SinglePost data={element} key={id} />;
      })}
    </div>
  );
}
