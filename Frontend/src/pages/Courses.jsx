import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero2 from "../components/Hero/Hero2";
import webdev from "../assets/images/webdev.jpg";
import css from "../assets/images/css.png";
import html from "../assets/images/html.png";
import java from "../assets/images/java.png";
import javascript from "../assets/images/javascript.png";
import mern from "../assets/images/mern.png";
import react from "../assets/images/react.png";
import springboot from "../assets/images/springboot.png";
import slider1 from "../assets/slider1.png";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Courses = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const navigate = useNavigate();
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Access Denied</h1>
        <p className="text-gray-600 mb-4">Please log in to view courses.</p>
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
    <div className="text-dark  items-center bg-light overflow-hidden relative">
      <Hero2 />
      <div className="container">
        <h1 className="text-3xl font-bold">Courses</h1>
        <p className="mt-4 text-gray-600">
          Explore a variety of courses designed to help you excel in your
          studies and career.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 container">
        {coursesData.map((course, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 shadow rounded-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => navigate(`/course/${index}`)}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-bold mt-2">{course.title}</h2>
            <p className="text-gray-500">{course.description}</p>
          </motion.div>
        ))}
      </div>

      <Slider {...sliderSettings} className="mt-10">
        {sliderImages.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt="Hero Slide"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>

      <footer className="mt-10 bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2025 The Brain XP. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

const coursesData = [
  {
    title: "₹499",
    description: "Web Design and Development",
    image: webdev,
  },
  {
    title: "₹499",
    description: "Mern-Stack",
    image: mern,
  },
  {
    title: "₹499",
    description: "React-js",
    image: react,
  },
  {
    title: "₹499",
    description: "Java Development",
    image: java,
  },
  {
    title: "₹499",
    description: "Spring-Boot",
    image: springboot,
  },
  {
    title: "₹499",
    description: "HTML",
    image: html,
  },
  {
    title: "₹499",
    description: "CSS-Cascading Style Sheet",
    image: css,
  },
  {
    title: "₹499",
    description: "JavaScript",
    image: javascript,
  },
];

const sliderImages = [slider1, slider1, slider1];

export default Courses;
