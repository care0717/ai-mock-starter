import { createRouter } from "./router.js";
import header from "./components/Header.html?raw";
import footer from "./components/Footer.html?raw";
import home from "./pages/Home.html?raw";
import about from "./pages/About.html?raw";

// ルーティング設定（ハッシュでページ切り替え）
const router = createRouter({
  "/": home,
  "/about": about,
});

// ページ描画
const app = document.getElementById("app");

router.start((pageContent) => {
  app.innerHTML = `
    ${header}
    <main>${pageContent}</main>
    ${footer}
  `;
});
