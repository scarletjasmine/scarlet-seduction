import { Hono } from 'hono'
const app = new Hono()



type Bindings = {
  OPENAI_API_KEY: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', async (c, next) => {
          const key = c.req.param('OPENAI_API_KEY')
          await c.env.DEVIL.get(key, c.req.body)
          return c.text(`got ${key} successfully!`)
        });
// Access to environme
export default {
  fetch: app.fetch
}

/** 
const app = new Hono();

// Add more routes here

app.get("/api/", (c) => {
  async fetch(request, env, ctx) {
    const openai = new OpenAI({
      apiKey: env.OPENAI_API_KEY,
    });
    console.log(`OpenAI API Key: ${env.OPENAI_API_KEY}`);
    return openai;
  }

  return requestHandler(c.req.raw, {
    cloudflare: { env: c.env, ctx: c.executionCtx },
  });
});

export default app;






/** 



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
*/