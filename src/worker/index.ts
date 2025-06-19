/*import Chat from '../react-app/chat.tsx';*/
import { Hono } from 'hono';

interface Bindings {
  OPENAI_API_KEY: string;
}




const app = new Hono<{ Bindings: Bindings }>();


app.get('/api/data', (c) => {
  const apiKey = c.env.OPENAI_API_KEY;
  

  // Use apiKey and databaseUrl in your logic
  return c.json({ message: 'Data fetched successfully' });
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