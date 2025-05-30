import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Courses",
    path: "/courses",
  },
  {
    id: 6,
    title: "Games",
    path: "/games",
  },
  {
    id: 4,
    title: "Doubt-Solver",
    path: "/community",
  },
  {
    id: 3,
    title: "About us",
    path: "/about",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
  },
];
const Navbar = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <h1
            onClick={() => navigate("/")}
            className="font-bold text-2xl cursor-pointer"
          >
            The Brain XP
          </h1>
        </div>
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </Link>
              </li>
            ))}
            {isAuthenticated ? (
              <h1>
                <FaRegUserCircle onClick={() => navigate("/profile")} />
              </h1>
            ) : (
              <button
                className="primary-btn"
                onClick={() => loginWithRedirect()}
              >
                LogIn / SignIn
              </button>
            )}
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
