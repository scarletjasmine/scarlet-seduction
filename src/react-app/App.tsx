import "./App.css";
import Chat from "./chat.tsx"

import { useEffect, useState } from 'react';

function App() {
  const [openaikey, setOpenaikey] = useState<string | undefined>(undefined);
  
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/data');
                const result = await response.text()
                console.log(result);
                setOpenaikey(result);
              
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
          {openaikey}
            <Chat openaiapikey={openaikey} />
        </div>
    );
}

export default App;


