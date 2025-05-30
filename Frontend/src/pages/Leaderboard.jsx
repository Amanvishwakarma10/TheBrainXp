import { useNavigate } from "react-router-dom";

const leaderboardData = [
  { name: "Alice", score: 95 },
  { name: "Bob", score: 90 },
  { name: "Charlie", score: 85 },
  { name: "David", score: 80 },
  { name: "Eve", score: 75 },
];

export default function LeaderboardPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Leaderboard
      </h1>
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <ul>
          {leaderboardData.map((player, index) => (
            <li
              key={index}
              className="flex justify-between p-2 border-b border-gray-300 dark:border-gray-600"
            >
              <span className="text-gray-800 dark:text-white">
                {player.name}
              </span>
              <span className="text-gray-800 dark:text-white font-semibold">
                {player.score}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => navigate("/games")}
        className="mt-8 px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-all"
      >
        Back to Quiz
      </button>
    </div>
  );
}
