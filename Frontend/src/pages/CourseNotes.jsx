import { useParams } from "react-router-dom";
import webdev from "../assets/images/webdev.jpg";
import css from "../assets/images/css.png";
import html from "../assets/images/html.png";
import java from "../assets/images/java.png";
import javascript from "../assets/images/javascript.png";
import mern from "../assets/images/mern.png";
import react from "../assets/images/react.png";
import springboot from "../assets/images/springboot.png";

const coursesData = [
  {
    id: 0,
    description: "Web Design and Development",
    image: webdev,
    notes: "Learn HTML, CSS, JavaScript, and React for web development.",
  },
  {
    id: 1,
    description: "Mern-Stack",
    image: mern,
    notes: "Learn MongoDB, Express.js, React, and Node.js.",
  },
  {
    id: 2,
    description: "React-js",
    image: react,
    notes: "Master React.js with hooks, state management, and components.",
  },
  {
    id: 3,
    description: "Java Development",
    image: java,
    notes: "Understand Java programming with OOP concepts and frameworks.",
  },
  {
    id: 4,
    description: "Spring-Boot",
    image: springboot,
    notes: "Learn how to build REST APIs with Spring Boot.",
  },
  {
    id: 5,
    description: "HTML",
    image: html,
    notes: "Master HTML structure and semantic elements.",
  },
  {
    id: 6,
    description: "CSS-Cascading Style Sheet",
    image: css,
    notes: "Explore CSS layouts, flexbox, and grid.",
  },
  {
    id: 7,
    description: "JavaScript",
    image: javascript,
    notes: "Learn JavaScript ES6+, DOM manipulation, and async programming.",
  },
];

const CourseNotes = () => {
  const { courseId } = useParams();
  const course = coursesData[courseId];

  return (
    <div className="mx-auto p-6 max-w-4xl h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 h-screen">
        <div className="text-3xl font-bold text-gray-900 flex items-center justify-center mb-20">
          <h1>{course.description} Notes</h1>
        </div>
        <div className="container">
          <div className="container">
            <img
              src={course.image}
              alt={course.description}
              className="w-full h-72 object-cover rounded-lg mt-4 shadow-md"
            />
          </div>
          <div className="container">
            <p className="text-gray-700 mt-4 text-lg leading-relaxed">
              {course.notes || "No notes available for this course."}
            </p>
          </div>
          <div className="my-10">
            <p className="text-gray-700 mt-4 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ea
              nisi vero itaque! Magnam, aspernatur eius commodi eaque recusandae
              error voluptates odio blanditiis sed possimus aliquid nisi impedit
              qui rem porro rerum omnis obcaecati harum unde. Quos atque
              debitis, laborum pariatur illum maiores dicta, laboriosam libero
              cupiditate voluptatum ullam nisi sequi vitae provident explicabo
              qui nostrum expedita repellendus ea odit quo tenetur alias ut.
              Ducimus maiores laborum alias est. Consectetur necessitatibus
              architecto animi odit. Alias minus et nam voluptatem quis totam
              libero qui, delectus expedita harum magnam, quae illo, praesentium
              modi nemo eos veniam quod quam odit eum explicabo. Placeat!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseNotes;
