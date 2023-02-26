import { Routes as InitialRoutes, Route, Navigate } from "react-router-dom";
import AddPost from "../AddPost";
import Nav from "../Nav";
import Posts from "../Posts";

export default function Routes() {
  return (
    <div>
      <InitialRoutes>
        <Route path="/" element={<Navigate to="/posts" />}></Route>
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/posts" element={<Posts />} />
      </InitialRoutes>
    </div>
  );
}
