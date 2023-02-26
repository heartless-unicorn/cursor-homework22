import { Routes as InitialRoutes, Route } from "react-router-dom";
import AddPost from "../AddPost";
import Nav from "../Nav";
import Posts from "../Posts";

export default function Routes() {
  return (
    <div>
      <Nav />
      <InitialRoutes>
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/posts" element={<Posts />} />
      </InitialRoutes>
    </div>
  );
}
