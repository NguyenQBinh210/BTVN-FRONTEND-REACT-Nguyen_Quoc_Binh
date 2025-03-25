import { Link } from "react-router";

const NavBar = () => {
  return (
    <>
      <nav className="flex items-center justify-center text-2xl font-serif z-20">
        <Link to="/">Home</Link> /<Link to="/about">About</Link> /
        <Link to="/contact">Contact</Link> /<Link to="/product">Product</Link> /
        <div className="group inline-block relative">
          <Link to="/dashbroad" className=" rounded inline-block">
            Dashboard
          </Link>
          <div className="absolute left-0 w-40 bg-white shadow-md rounded hidden z-10 group-hover:block">
            <Link
              to="/dashbroad/profile"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Profile
            </Link>
            <Link
              to="/dashbroad/setting"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Settings
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            className="px-10 py-3 mt-2 text-sm text-center bg-yellow-500 text-white rounded-full md:mt-8 md:ml-4"
            to = "login"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
