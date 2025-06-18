import { Hono } from "hono";
import { OpenAI } from 'openai';





const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

export default {
  async fetch(request, env, ctx) {
    const openai = new OpenAI({
      apiKey: env.OPENAI_API_KEY,
    });
    console.log(`OpenAI API Key: ${env.OPENAI_API_KEY}`);
    return openai;
  }

}
