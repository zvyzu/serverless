import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

const adminAccount = {
  username: process.env.ADMIN_USERNAME!,
  password: process.env.ADMIN_PASSWORD!,
};

const welcomeStrings = [
  "Hello Hono!",
  "To learn more about Hono on Vercel, visit https://vercel.com/docs/frameworks/backend/hono",
];

app.get("/api", (c) => {
  return c.text(welcomeStrings.join("\n\n"));
});
app.get("/", (c) => {
  return c.redirect("/index.html");
});
// Serve index.html at root
// app.get("/", serveStatic({ path: "./public/index.html" }));

// Serve other static files
app.use("/*", serveStatic({ root: "./public" }));

export default app;
