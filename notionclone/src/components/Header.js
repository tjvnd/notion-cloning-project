import { push } from "../utils/router.js";

export default function Header({ $target }) {
  const $header = document.createElement("div");
  $header.className = "header";
  $target.appendChild($header);

  this.template = `
    <h1 class= "notion-img" >
    <a href="https://github.com/tjvnd"><img src="/src/img/logo.jpg" class="notion-img"></a>
    </h1>`

  this.render = () => {
    $header.innerHTML = this.template;
  };

  this.render();

  $header.addEventListener("click", () => {
    push("/");
  });
}