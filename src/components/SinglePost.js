import Menu from "./Menu";
import "./style_component/SinglePost.css";

export default function SinglePost(response) {
  return (
    <div>
      <div className="Post col-8">
        <div className="header">
          {" "}
          <img
            src={response.data.icon}
            className="img-fluid icon"
            alt={response.data.name}
          />{" "}
          <span className="name"> {response.data.name}</span>
          <span> {response.data.nickname}</span>
          <span> {response.data.date}</span>
        </div>
        <p>{response.data.content}</p>
        <div className="img-box">
          <img
            src={response.data.image}
            alt="Post"
            className="img-fluid w-50"
          />
        </div>
        <Menu
          likeCount={response.data.likes}
          commentCount={response.data.comments}
          repostCount={response.data.reposts}
        />
      </div>
    </div>
  );
}
