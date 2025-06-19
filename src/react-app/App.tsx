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
import { useEffect } from 'react';

function App() {
 //   const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/data'); // Request to your Hono Worker
                const result = await response.json();
                //setData(result.message);
                console.log(result.message);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Welcome to the Scarlet Seduction</h1>
        </div>
    );
}

export default App;


