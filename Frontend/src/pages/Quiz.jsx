import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

const subjects = [
  {
    name: "Cybersecurity",
    icon: "🔒",
    color: "bg-green-600",
    path: "cybersecurity",
  },
  {
    name: "Artificial Intelligence",
    icon: "🤖",
    color: "bg-green-600",
    path: "ai",
  },
  {
    name: "Blockchain",
    icon: "⛓️",
    color: "bg-green-600",
    path: "blockchain",
  },
  {
    name: "Cloud Computing",
    icon: "☁️",
    color: "bg-green-600",
    path: "cloud",
  },
  {
    name: "Data Science",
    icon: "📊",
    color: "bg-green-600",
    path: "data_science",
  },
  {
    name: "Networking",
    icon: "🌐",
    color: "bg-green-600",
    path: "networking",
  },
];

export default function QuizGamePage() {
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Access Denied</h1>
        <p className="text-gray-600 mb-4">
          Please log in to access the quiz game.
        </p>
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
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center p-6">
      {/* Back Button in Header */}

      {/* Engaging Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 my-10"
      >
        🎯 Test Your KnowledGe & Climb the Leaderboard!
      </motion.h1>

      {/* Quiz Subject Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl my-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {subjects.map((subject, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.07, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className={`p-8 rounded-2xl shadow-xl bg-opacity-80 backdrop-blur-lg transition-all cursor-pointer flex flex-col items-center justify-center ${subject.color} text-white`}
            onClick={() => navigate(`/quiz/${subject.path}`)}
          >
            <motion.span
              className="text-5xl mb-4"
              animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              {subject.icon}
            </motion.span>
            <h2 className="text-2xl font-semibold tracking-wide">
              {subject.name}
            </h2>
          </motion.div>
        ))}
      </motion.div>
      <div className="w-full max-w-5xl flex items-center justify-start mb-6">
        <motion.button
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-all my-10"
        >
          <ArrowLeft size={24} />
          <span>Back to Home</span>
        </motion.button>
      </div>
      <footer className="mt-10 bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2025 The Brain XP. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
