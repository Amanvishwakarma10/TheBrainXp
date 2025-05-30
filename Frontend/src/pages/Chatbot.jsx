import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput(""); // Clear input box

    try {
      const { data } = await axios.post("http://localhost:5000/chat", {
        message: input,
      });
      const botMessage = {
        role: "bot",
        content: data.reply || "No response from AI.",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Something went wrong. Try again later." },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-light-100 container overflow-hidden">
      <Navbar />
      <div className="bg-transparent-1000 text-black text-lg font-bold p-4 text-center m-10">
        Ask Anything !{" "}
      </div>

      <div className="flex-grow p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs md:max-w-md text-white ${
                msg.role === "user" ? "bg-green-500" : "bg-gray-700"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="p-4 bg-white flex items-center border-t">
        <input
          type="text"
          className="flex-grow p-3 border rounded-full focus:outline-none focus:ring-2 text-dark focus:ring-purple-500"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="ml-3 px-5 py-2 bg-green-500 text-white rounded-full hover:bg-purple-600"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
