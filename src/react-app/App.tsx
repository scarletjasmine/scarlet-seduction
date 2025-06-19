import "./App.css";
import Chat from "./chat.tsx"

import { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState("");
    const [isLoading, setIsLoading] = useState(true);

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
        fetchData().then(() => setIsLoading(false));
    }, []);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
          <Chat openaiapikey={data} />
        </div>
    );
}

export default App;
