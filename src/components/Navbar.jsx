import Logo2 from "../assets/Logo2.png";

function Navbar() {
  return (
    <header className="text-gray-600">
      <div className="container mx-auto flex pt-8 pb-2 flex-col md:flex-row items-center">
        <a
          className="font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="#"
        >
          <img src={Logo2} className="w-60 h-auto" alt="logo" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {["Home", "About", "Products", "Contact Us"].map((link, index) => (
            <a
              key={index}
              className="mr-5 hover:text-gray-900"
              href={`${link.toLowerCase()}.html`}
            >
              {link}
            </a>
          ))}
        </nav>
        <a href="login.html">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
