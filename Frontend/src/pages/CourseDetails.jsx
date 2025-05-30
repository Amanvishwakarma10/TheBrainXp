import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import webdev from "../assets/images/webdev.jpg";
import css from "../assets/images/css.png";
import html from "../assets/images/html.png";
import java from "../assets/images/java.png";
import javascript from "../assets/images/javascript.png";
import mern from "../assets/images/mern.png";
import react from "../assets/images/react.png";
import springboot from "../assets/images/springboot.png";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";

const coursesData = [
  {
    id: 0,
    title: "499",
    description: "Web Design and Development",
    image: webdev,
    price: 499,
    notes: "Learn HTML, CSS, JavaScript, and React for web development.",
  },
  {
    id: 1,
    title: "499",
    description: "Mern-Stack",
    image: mern,
    price: 499,
    notes: "Learn MongoDB, Express.js, React, and Node.js.",
  },
  {
    id: 2,
    title: "499",
    description: "React-js",
    image: react,
    notes: "Master React.js with hooks, state management, and components.",
    price: 499,
  },
  {
    id: 3,
    title: "499",
    description: "Java Development",
    image: java,
    notes: "Understand Java programming with OOP concepts and frameworks.",
    price: 499,
  },
  {
    id: 4,
    title: "499",
    description: "Spring-Boot",
    image: springboot,
    notes: "Learn how to build REST APIs with Spring Boot.",
    price: 499,
  },
  {
    id: 5,
    title: "499",
    description: "HTML",
    image: html,
    notes: "Master HTML structure and semantic elements.",
    price: 499,
  },
  {
    id: 6,
    title: "499",
    description: "CSS-Cascading Style Sheet",
    image: css,
    notes: "Explore CSS layouts, flexbox, and grid.",
    price: 499,
  },
  {
    id: 7,
    title: "499",
    description: "JavaScript",
    image: javascript,
    notes: "Learn JavaScript ES6+, DOM manipulation, and async programming.",
    price: 499,
  },
];

const CourseDetails = () => {
  const { user } = useAuth0();
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = coursesData[courseId];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api.razorpay.com/v1/orders";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    try {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = async () => {
        const response = await fetch(
          "http://localhost:5000/api/razorpay-order",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: 499 }),
          }
        );

        const order = await response.json();

        if (!order.id) throw new Error("Failed to create Razorpay order");

        const options = {
          key: "rzp_test_zsqNoQSQSm6nXW",
          amount: order.amount,
          currency: order.currency,
          name: course.description,
          description: "Purchase Course",
          order_id: order.id,
          handler: function (response) {
            alert("Payment Successful!");
            console.log(response);
            navigate(`/course-notes/${courseId}`); // Redirect to Course Notes
          },
          prefill: {
            name: user.name,
            email: user.email,
            contact: user.phone_number,
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      };
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed!");
    }
  };

  return (
    <div className="container">
      <Navbar />
      <div className="container p-8 mt-20 mb-20 flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="lg:w-1/2">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 space-y-4 bg-white p-6 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold text-gray-800">
            {course.description}
          </h1>
          <p className="text-gray-600 text-lg">{course.notes}</p>
          <h2 className="text-3xl font-semibold text-blue-600">
            ₹{course.price}
          </h2>
          <button
            onClick={handlePayment}
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Buy Now
          </button>
        </div>
      </div>
      <div className="mb-20">
        <Footer />
      </div>
    </div>
  );
};
export default CourseDetails;
