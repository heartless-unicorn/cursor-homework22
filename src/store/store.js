import { createStore } from "redux";
import { posts } from "../components/PostList";
const initialPosts = posts;
function managePosts(state = initialPosts, action) {
  switch (action.type) {
    case "ADD_POST": {
      state.push(action.payload);
      return state;
    }
    default:
      return state;
  }
}
const store = createStore(managePosts);
store.subscribe(() => console.log(store.getState()));
console.log(store.getState());
export default store;
