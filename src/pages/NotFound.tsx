
import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-team-light">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-8xl font-bebas text-team-primary mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for has gone out of bounds.
        </p>
        <Link
          to="/"
          className="btn-primary inline-flex items-center"
        >
          <HomeIcon className="mr-2" size={20} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
