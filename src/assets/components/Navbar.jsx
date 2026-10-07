
const Navbar = () => {
  return (
    <div className="navbar text-black shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Technologies</a>
              <ul className="p-2">
                <li>
                  <a>Projects</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="">
          <img
            src="../public/devstack-logo.png"
            alt="devStack logo"
            className="h-8 w-auto"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li >
            <a className="text-pink-600">Home</a>
          </li>
          <li>
            <a>Technologies</a>
          </li>

          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
       <button className="btn text-black bg-white ">Sign In</button>
        <button className="btn btn-secondary">Sign Up</button>
        
      </div>
    </div>
  );
};

export default Navbar;
