import { useState } from "react";
import { useSelector } from "react-redux";
import SinglePost from "../components/SinglePost";
import Nav from "./Nav";

export default function Posts() {
  const posts = useSelector((state) => state);

  return (
    <div>
      <Nav />
      {posts.map((element, id) => {
        return <SinglePost data={element} key={id} />;
      })}
    </div>
  );
}
