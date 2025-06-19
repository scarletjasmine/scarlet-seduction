import "./App.css";
//import Chat from "./chat.tsx"

import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState<string | undefined>(undefined);
  
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/data');
                let result = await response.json();
                setData(result.apikey)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
          {data ? <p>OpenAI API Key: {data}</p> : <p>Loading...</p>}
            
        </div>
    );
}

export default App;


/**
 * <Chat openaiapikey={openaikey} />
 */