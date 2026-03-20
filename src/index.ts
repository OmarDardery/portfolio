import { serve } from "bun";
import { join } from "path";
import index from "./index.html";

const dev = process.env.NODE_ENV !== "production";

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,
  },

  async fetch(req) {
    const url = new URL(req.url);
    
    // Serve static files from src/public
    if (url.pathname.startsWith("/assets/") || url.pathname.startsWith("/projects/")) {
      const filePath = join(process.cwd(), "src/public", url.pathname);
      const file = Bun.file(filePath);
      if (await file.exists()) {
        return new Response(file);
      }
    }

    // Default router behavior
    return undefined;
  },

  development: dev && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
