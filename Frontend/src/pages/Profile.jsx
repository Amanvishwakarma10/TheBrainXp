import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Profile = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold text-gray-700">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-light">
      <Navbar />
      <div className="h-full bg-white my-10">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Cover Image (Like LinkedIn Banner) */}
          <div className="h-40 bg-green-600 relative">
            {/* Profile Picture (Visible Always) */}
            <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2">
              <img
                src={user?.picture || "https://via.placeholder.com/100"}
                alt="User"
                className="w-24 h-24 rounded-full border-4 border-white shadow-md"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex flex-col items-center pt-16 p-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              {isAuthenticated ? user.name : "Guest User"}
            </h2>
            <p className="text-gray-600">
              {isAuthenticated ? user.email : "Please log in to view details"}
            </p>

            {/* Buttons */}
            <div className="mt-4 flex gap-4">
              {!isAuthenticated ? (
                <button
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </button>
              ) : (
                <>
                  <button
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                    onClick={() => loginWithRedirect()}
                  >
                    View Profile
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log Out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
