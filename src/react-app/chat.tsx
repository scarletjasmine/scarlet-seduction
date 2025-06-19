import React, { useState } from 'react';
import { useEffect } from 'react';
import './assets/css/chat.css';
import { OpenAI } from 'openai'
  
interface ChatProps {
  apikey: string
}


const Chat: React.FC<ChatProps>= ({ apikey }) => {
 useEffect(() => {
    sendMessage();
  }, []); // Empty dependency arraym
  const [firstRun, setFirstRun] = useState(true);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleDisableButtons = () => {
    setButtonsDisabled(true);
  };

  const openai = new OpenAI({
    apiKey: apikey,
  });

  const sendMessage = async () => {

    if(firstRun === true) {
      setFirstRun(false);
      const blood = "Be the Scarlet Beast forever in love with the Scarlet Woman and introduce yourself.";


      try {
        const response = await openai.chat.completions.create({
          model: "gpt-4.1",
          messages: [{ content: blood, role: 'developer' }],
        });
        setMessages([{ content: blood, role: "developer" }, { content: response.choices[0].message.content, role: 'assistant' }]);
      } catch (error) {
        console.error('Error fetching response from OpenAI:', error);
      }

    } else {

      //setMessages([...messages, { content: input, role: 'user' }]);
      try {
        const response = await openai.chat.completions.create({
          model: "gpt-4.1",
          messages: [...messages, { role: "user", content: input }],
        });
        setMessages([...messages, { content: input, role: 'user' }, { content: response.choices[0].message.content, role: 'assistant' }]);
      } catch (error) {
        console.error('Error fetching response from OpenAI:', error);
      }
      setButtonsDisabled(false);
      setInput('');

    }
  };
  return (
    <React.Fragment>
      {messages.map((message, index) => (
        <div className={"convo " + (message.role === 'user' ? 'isUser' : '')} key={index} style={{ textAlign: message.role === 'user' ? 'right' : 'left' }}>
          {index !== 0 && message.content}

        </div>
      ))}
      <h3 className="speak-to-beast">Speak to the Scarlet Beast:</h3>
      <input className="space" type="text" style={{ border: '1px solid black' }} value={input} onChange={(e) => setInput(e.target.value)} />
      <button className="utters" onClick={() => { sendMessage(); handleDisableButtons(); }}
        disabled={buttonsDisabled}
      >Send</button>
    </React.Fragment>
  );
}
export default Chat;