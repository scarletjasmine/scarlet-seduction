import { Hono } from 'hono';
//import { env } from 'hono/adapter';


const app = new Hono<{ Bindings: { OPENAI_API_KEY: string } }>()

app.get('*', (c) => {
  const apikey = c.env.OPENAI_API_KEY;
  return c.text(`OPENAI_API_KEY: ${apikey}`)
})

export default {
  fetch: app.fetch
}
/** 
interface Env {
  OPENAI_API_KEY: string;
}
const app = new Hono<{ Bindings: Env }>()


app.get('/api/data', async (c) => {
 // const envVar = c.env.OPENAI_API_KEY;
 // return c.text(`Env var: ${envVar}`);
  return c.json({ message:  });
});







/** 
app.get('/', (c) => {
  return c.text('Hello Hono!'); // Use the context object to create a response
});




app.get('/', (c) => {

  console.log(`OpenAI API Key: ${c.env.REACT_APP_OPENAI_API_KEY}`);
  

  // ... render your TSX component and pass the variable as a prop
  //return c.html(<Chat apikey: c.env.REACT_APP_OPENAI_API_KEY />);
});

// Access to environme
export default app;


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