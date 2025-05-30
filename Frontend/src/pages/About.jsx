import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import image from "../assets/about.png";
import image2 from "../assets/about2.png";
import Footer from "../components/Footer/Footer";

const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05 },
};

const AboutPage = () => {
  return (
    <>
      <div className="overflow-x-hidden text-dark mx-auto bg-white overflow-hidden relative">
        <Navbar />

        {/* Grid Layout for About Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 container">
          {/* Left Side - Heading */}
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={image2}
            alt=""
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
          />

          {/* Right Side - Content */}
          <motion.p
            className="text-gray-700 text-2xl leading-relaxed font-medium"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Brain XP is a revolutionary{" "}
            <span className=" text-green">e-learning</span> platform designed to
            transform traditional learning into an interactive, gamified, and
            AI-driven experience. Our mission is to make education engaging,
            accessible, and effective by integrating cutting-edge technology
            with smart learning methodologies. With AI-powered assistance,
            personalized study paths, and competitive gamification elements, The
            Brain XP is reshaping how students learn, retain knowledge, and
            achieve their goals.
          </motion.p>
        </div>

        {/* Feature Sections (2 Rows of 4 Boxes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 container">
          {[
            {
              title: "🚀 Key Features",
              color: "blue",
              items: [
                "AI-powered chatbot",
                "Gamified quizzes",
                "Leaderboard system",
                "Badges & Achievements",
              ],
            },
            {
              title: "🎮 Gamification",
              color: "green",
              items: [
                "Earn points",
                "Unlock badges",
                "AI-driven quizzes",
                "Compete with friends",
              ],
            },
            {
              title: "🤖 AI Assistance",
              color: "yellow",
              items: [
                "Instant answers",
                "Study recommendations",
                "Adaptive learning",
                "Real-time support",
              ],
            },
            {
              title: "🔮 Future Vision",
              color: "purple",
              items: [
                "AI-driven modules",
                "Personalized study paths",
                "Real-time mentorship",
                "Interactive learning",
              ],
            },
            {
              title: "📚 Course Library",
              color: "red",
              items: [
                "Curated courses",
                "Skill-based learning",
                "Industry-relevant topics",
                "Constant updates",
              ],
            },
            {
              title: "💡 Expert Insights",
              color: "teal",
              items: [
                "Live mentorship",
                "Exclusive webinars",
                "Industry connections",
                "Practical guidance",
              ],
            },
            {
              title: "📊 Progress Tracking",
              color: "pink",
              items: [
                "Track performance",
                "Detailed analytics",
                "Goal setting",
                "Achievement badges",
              ],
            },
            {
              title: "🌍 Community",
              color: "orange",
              items: [
                "Peer discussions",
                "Collaborative learning",
                "Networking opportunities",
                "Global reach",
              ],
            },
          ].map((box, index) => (
            <motion.div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-md cursor-pointer border border-gray-300 transition-all duration-300 hover:bg-${box.color}-100`}
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <h2 className={`text-2xl font-bold text-${box.color}-700 mb-3`}>
                {box.title}
              </h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {box.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Animated SVG Character */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src={image}
            alt="Animated AI Character"
            className="w-96 h-96"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
