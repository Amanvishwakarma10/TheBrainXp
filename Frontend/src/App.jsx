import React from "react";
import Courses from "./pages/Courses";
import Quiz from "./pages/Quiz";
import Leaderboard from "./pages/Leaderboard";
import About from "./pages/About";
import Landingpage from "./pages/Landingpage";
import { Routes, Route } from "react-router-dom";
import Chatbot from "./pages/Chatbot2";
import ContactUs from "./components/Contact/ContactUs";
import CourseDetails from "./pages/CourseDetails";
import CourseNotes from "./pages/CourseNotes";
import QuizSubjectPage from "./pages/QuizSubject";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<Quiz />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/community" element={<Chatbot />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />
        <Route path="/course-notes/:courseId" element={<CourseNotes />} />
        <Route path="/quiz/:subject" element={<QuizSubjectPage />} />{" "}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </main>
  );
};

export default App;
