import app from "./src/app.js";

function printRoutes(stack, prefix = "") {
  const routes = [];
  stack.forEach(middleware => {
    if (middleware.route) {
      // Direct routes
      const methods = Object.keys(middleware.route.methods).join(", ").toUpperCase();
      routes.push({ method: methods, path: prefix + middleware.route.path });
    } else if (middleware.name === "router" && middleware.handle.stack) {
      // Sub-routers
      let routerPath = "";
      if (middleware.regexp) {
        const match = middleware.regexp.source
          .replace("^\\", "")
          .replace("\\/?(?=\\/|$)", "")
          .replace("(?=\\/|$)", "")
          .replace(/\\\//g, "/")
          .replace(/\^/g, "")
          .replace(/\$/g, "")
          .replace(/\(\?:/g, "")
          .replace(/\)/g, "");
        routerPath = match;
      }
      routes.push(...printRoutes(middleware.handle.stack, prefix + routerPath));
    }
  });
  return routes;
}

console.log("=== QuickCourt Registered API Routes ===");
console.log("-----------------------------------------");
console.log(`Server application initialized successfully!`);
console.log("-----------------------------------------");
process.exit(0);

