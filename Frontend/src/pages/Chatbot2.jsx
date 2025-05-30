import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import errorimage from "../assets/images/error.webp";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Chatbot = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (isAuthenticated && user?.sub) {
      axios
        .get(`http://localhost:5000/chat-history/${user.sub}`)
        .then((res) => {
          setMessages(res.data.history);
        });
    }
  }, [isAuthenticated, user]);

  const sendMessage = async () => {
    if (!input.trim() || !isAuthenticated || !user?.sub) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post("http://localhost:5000/chat", {
        message: input,
        userId: user.sub,
      });

      const botMessage = { role: "assistant", content: response.data.reply };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error:", error);
    }

    setInput("");
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Access Denied</h1>
        <p className="text-gray-600 mb-4">Please log in to Chat with us!!.</p>
        <button
          onClick={() => loginWithRedirect()}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600"
        >
          Log In
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="h-screen flex flex-col bg-light-100 text-black container">
        <div className="relative">
          <button
            className="absolute left-0  transform -translate-y-1/2 text-black-900 font-bold p-10 my-12 text-4xl"
            onClick={() => navigate("/")}
          >
            <GoArrowLeft />
          </button>
          <h1 className="text-3xl font-bold text-center py-3 text-black mb-10 shadow-lg shadow-blue-500 my-5">
            Doubt-Solver
          </h1>
        </div>

        {/* Chat Messages */}
        <div className="flex-grow overflow-auto p-4 space-y-2">
          {messages.map((msg, index) => (
            <p
              key={index}
              className={`p-2 rounded-lg ${
                msg.role === "user"
                  ? "text-blue-500 self-end"
                  : "text-green-500 self-start"
              } max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg`}
            >
              <strong>{msg.role === "user" ? "You" : "Bot"}:</strong>{" "}
              {msg.content}
            </p>
          ))}
        </div>

        {/* Input & Send Button */}
        <div className="bg-white p-4 flex items-center gap-2 border-t shadow-lg">
          <input
            className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-3/4"
            type="text"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
      <div>
        <footer className="mt-10 bg-gray-800 text-white p-6 text-center">
          <p>&copy; 2025 The Brain XP. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Chatbot;
