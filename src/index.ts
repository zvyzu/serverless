import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

const welcomeStrings = [
  "Hello Hono!",
  "To learn more about Hono on Vercel, visit https://vercel.com/docs/frameworks/backend/hono",
];

app.get("/api", (c) => {
  return c.text(welcomeStrings.join("\n\n"));
});
app.get("/*", serveStatic({ root: "./public" }));

export default app;
