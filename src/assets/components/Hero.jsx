import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero text-black min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            alt="Tailwind CSS hero component"
            src="/public/banner-stack.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Build Your Ideal <br></br>
              <span className="bg-transparent  bg-linear-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Development Stack
              </span>
            </h1>
            <p className="py-6">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
