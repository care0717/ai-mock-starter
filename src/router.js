// ハッシュベースの簡易ルーター
// routes: { "/": htmlString, "/about": htmlString, ... }

export function createRouter(routes) {
  function getPath() {
    return location.hash.slice(1) || "/";
  }

  function render() {
    const path = getPath();
    return routes[path] || routes["/"];
  }

  function start(callback) {
    const handler = () => callback(render());
    window.addEventListener("hashchange", handler);
    callback(render());
  }

  return { start };
}
