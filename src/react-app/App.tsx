import "./App.css";

import { useEffect, useState } from 'react';

function App() {
  const [apikey, setApikey] = useState<string | null>(null);
  
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/data');
                const result = await response.text()
                setApikey(result);
              
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <chat apikey={apikey} />
        </div>
    );
}

export default App;


