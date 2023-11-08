import React from "react";
import { Link } from "react-router-dom";
import imgProfile from "../assets/id.jpg";

const Home = () => {
  return (
    <>
      <h1 className="text-center line-through capitalize"> HOME PAGE </h1>
      <Link to="/about"> Go to About Page </Link>
      <br />
      <Link to="/contacts"> Go to Contact Page </Link>
      <br />
      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={imgProfile}
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Joeram Chavez</p>
            <p className="text-slate-500 font-medium">
              Application Systems Engineer
            </p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
      <br />
      <div className="text-center container mx-auto bg-black">
        <p className="mt-4 px-6 text-xl text-gray-500 ">
          Create React App does not support custom PostCSS configurations and is
          incompatible with many important tools in the PostCSS ecosystem, like
          `postcss-import`. We highly recommend using Vite, Parcel, Next.js, or
          Remix instead of Create React App. They provide an equivalent or
          better developer experience but with more flexibility, giving you more
          control over how Tailwind and PostCSS are configured.
        </p>
      </div>
      <div className="text-center container mx-auto">
        <Link className="btn" to="/about">
          Show More!
        </Link>
      </div>
    </>
  );
};

export default Home;
