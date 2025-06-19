import { Hono } from 'hono';
import Chat from '../react-app/chat.tsx';



const app = new Hono();







app.get('/', (c) => {
  const apikey = c.env.OPENAI_API_KEY;

  // ... render your TSX component and pass the variable as a prop
  return c.html(<Chat key={apikey} />);
});

// Access to environme
export default app;

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