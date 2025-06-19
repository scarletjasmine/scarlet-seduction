/*// src/App.tsx

import "./App.css";

function App() {

  return (
    <>
      
    </>
  );
}
export default App;*/


// src/App.js
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState<string | null>(null);
  
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/data'); // Request to your Hono Worker
                const result = await response.text()
                setData(result);
              
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Welcome to the Scarlet Seduction</h1>
          <h2> {data ? <p>{data}</p> : <p>Loading data...</p>}</h2>
        </div>
    );
}

export default App;


