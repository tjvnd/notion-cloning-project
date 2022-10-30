import PostEditPage from "./components/PostEditPage.js";
import PostsPage from "./components/PostsPage.js";
import { initRouter } from "./utils/router.js";

export default function App({ $target }) {
  const postsPage = new PostsPage({
    $target,
    initialState: [],
  });

  const postEditPage = new PostEditPage({
    $target,
    initialState: {},
    listRendering: () => postsPage.setState(),
  });

  this.route = async () => {
    $target.innerHTML = "";

    const { pathname } = window.location;

    if (pathname === "/") {
      postsPage.setState();

    } else if (pathname.indexOf("/documents") === 0) {
      const [, , id] = pathname.split("/");

      await postsPage.setState();
      await postEditPage.setState({ id });

    } else {
      $target.innerHTML = "<h1>404 ERROR TT</h1>";
    }
  };

  this.route();
  initRouter(() => this.route());

  window.addEventListener("popstate", () => this.route());
}
