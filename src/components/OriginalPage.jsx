// Page versi lengkap, sebelum dipecah menjadi components

{
  /* Navbar start */
}
<header className="text-gray-600">
  <div className="container mx-auto flex pt-8 pb-2 flex-col md:flex-row items-center">
    <a className="font-medium items-center text-gray-900 mb-4 md:mb-0" href="#">
      <img src={Logo2} className="w-60 h-auto" />
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900" href="#">
        Home
      </a>
      <a className="mr-5 hover:text-gray-900" href="about.html">
        About
      </a>
      <a className="mr-5 hover:text-gray-900" href="products.html">
        Products
      </a>
      <a className="mr-5 hover:text-gray-900" href="contacts.html">
        Contact Us
      </a>
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
</header>;
{
  /* Navbar end */
}

{
  /* Home Page starts */
}
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-2 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-28 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 py-5">
        We don't make your coffee. We make your day.
        <br className="hidden lg:inline-block" />
      </h1>
      <p className="mb-8 leading-relaxed">
        Sometimes we find ourselves in a tricky situation: urgently need coffee
        but have no brewing tools in hand. No worries, there are some simple
        ways to brew coffee! Here are some tips for how to make simple coffee
        without a brewer at home or for example in woods.
      </p>
      <div className="flex justify-center py-10">
        <a href="login.html">
          <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
            Register
          </button>
        </a>
        <a href="login.html">
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            Login
          </button>
        </a>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src={SunflowerCoffee}
      />
    </div>
  </div>
</section>;

{
  /* About section */
}
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
        We don't make your coffee. We make your day.
      </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
        The café Coffee-express invites its guests to discover a tasty menu
        within the Fondation CAB. The sober and uncluttered menu highlights
        local seasonal products. Guests can relax under the fresh orange and
        lemon trees.
      </p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery1"
            className="w-full object-cover h-full object-center block"
            src={Images}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery2"
            className="w-full object-cover h-full object-center block"
            src={Image1}
          />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img
            alt="gallery3"
            className="w-full h-full object-cover object-center block"
            src={Image2}
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img
            alt="gallery4"
            className="w-full h-full object-cover object-center block"
            src={Image3}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery5"
            className="w-full object-cover h-full object-center block"
            src={Image4}
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="gallery6"
            className="w-full object-cover h-full object-center block"
            src={Image5}
          />
        </div>
      </div>
    </div>
  </div>
</section>;
