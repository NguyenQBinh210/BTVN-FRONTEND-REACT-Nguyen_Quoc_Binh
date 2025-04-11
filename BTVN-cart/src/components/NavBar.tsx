import { Link } from "react-router";

const NavBar = () => {
  return (
    <>
      <nav className="flex items-center justify-center text-2xl font-serif z-20">
        <Link to="/product">Product</Link> /
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
