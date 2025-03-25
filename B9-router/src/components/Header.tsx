
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header
      className={`w-full bg-amber-200 transition-transform duration-500 z-10 text-gray-700 ${"translate-y-0"}`}
    >
      <div className="flex flex-col max-w-screen-xl px-8 mx-auto md:items-center md:justify-between md:flex-row">
        <div className="flex flex-row items-center justify-between py-6">
          <div className="relative md:mt-8">
            <a
              href="#"
              className="text-lg relative z-50 font-bold tracking-widest text-gray-900 rounded-lg focus:outline-none"
            >
              Skilline
            </a>
            <svg
              className="h-11 z-40 absolute -top-2 -left-3"
              viewBox="0 0 79 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.2574 2.24264C37.6005 -0.100501 41.3995 -0.100505 43.7426 2.24264L76.7574 35.2574C79.1005 37.6005 79.1005 41.3995 76.7574 43.7426L43.7426 76.7574C41.3995 79.1005 37.6005 79.1005 35.2574 76.7574L2.24264 43.7426C-0.100501 41.3995 -0.100505 37.6005 2.24264 35.2574L35.2574 2.24264Z"
                fill="#65DAFF"
              />
            </svg>
          </div>
          <button className="rounded-lg md:hidden focus:outline-none">
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              }
            </svg>
          </button>
        </div>
        <div
          className={`h-0 md:h-auto flex flex-col items-center flex-grow md:items-center pb-4 md:pb-0 md:flex md:justify-end md:flex-row origin-top duration-300 ${"scale-y-100"}`}
        >
          <NavBar />
        </div>
          
      </div>
    </header>
  );
};

export default Header;
