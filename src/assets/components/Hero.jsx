import GradientText from "./GradientText";


const Hero = () => {
  return (
    <div>
      <div className="hero text-black">
        <div className="hero-content flex-col lg:flex-row">
          
          <div>
            <h1 className="text-5xl font-bold">
              Build Your Ideal <br></br>
              <span className={GradientText}>
              {/* <span className="bg-transparent  bg-linear-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent"> */}
                {" "}
                Development Stack
              </span>
            </h1>
            <p className="py-6">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="flex gap-4">
                <button className="btn bg-linear-to-r border-none from-amber-600 to-pink-600">Explore Technologies</button>
            <button className="btn w-40 text-black bg-white">Learn More</button>
            </div>
          </div>
          <img
            alt="Tailwind CSS hero component"
            src="/banner-stack.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
