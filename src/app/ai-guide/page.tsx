"use client";

import { useState } from "react";
import { Bot, Send, User } from "lucide-react";

export default function AiGuidePage() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello! I am your Transport AI Guide. How can I help you plan your journey in Karnataka today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: "user", text: input }]);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "ai", 
        text: "Live information is unavailable. This recommendation is based on the available timetable/estimated data. I recommend checking the schedules for the routes you mentioned." 
      }]);
    }, 1000);
    
    setInput("");
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto md:p-4">
      <div className="bg-white p-4 shadow-sm z-10 border-b flex items-center gap-3 md:rounded-t-xl">
        <div className="bg-orange-100 p-2 rounded-full text-orange-600">
          <Bot className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-800">Transport AI Guide</h1>
          <p className="text-xs text-gray-500">Demo Assistant</p>
        </div>
      </div>

      <div className="flex-1 bg-gray-50 p-4 overflow-y-auto flex flex-col gap-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-orange-100 text-orange-600'}`}>
              {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
            </div>
            <div className={`p-3 rounded-2xl ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border text-gray-800 rounded-tl-none'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white border-t md:rounded-b-xl pb-20 md:pb-4">
        <div className="flex items-center gap-2 max-w-3xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about trains, buses, or routes..."
            className="flex-1 p-3 border rounded-xl outline-none focus:border-blue-500"
          />
          <button 
            onClick={handleSend}
            className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex gap-2 overflow-x-auto mt-3 pb-2 scrollbar-hide max-w-3xl mx-auto">
          <button onClick={() => setInput("How do I reach Mysuru?")} className="whitespace-nowrap text-xs bg-gray-100 px-3 py-1.5 rounded-full text-gray-600 hover:bg-gray-200">How do I reach Mysuru?</button>
          <button onClick={() => setInput("Find the fastest route")} className="whitespace-nowrap text-xs bg-gray-100 px-3 py-1.5 rounded-full text-gray-600 hover:bg-gray-200">Find the fastest route</button>
          <button onClick={() => setInput("Where should I board?")} className="whitespace-nowrap text-xs bg-gray-100 px-3 py-1.5 rounded-full text-gray-600 hover:bg-gray-200">Where should I board?</button>
        </div>
      </div>
    </div>
  );
}
