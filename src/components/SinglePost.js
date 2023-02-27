import Menu from "./Menu";
import "./style_component/SinglePost.css";

export default function SinglePost(response) {
  return (
    <div className="SinglePost">
      <div>
        <div className="header">
          {" "}
          <img
            src={response.data.icon}
            className="img-fluid icon"
            alt={response.data.name}
          />{" "}
          <div className="header-info">
            <span> {response.data.name}</span>
            <span className="nickname"> {response.data.nickname}</span>
          </div>
          <span className="date"> {response.data.date}</span>
        </div>
        <div className="img-box">
          <p>{response.data.content}</p>

          <img src={response.data.image} alt="Post" />
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
