import SunflowerCoffee from "../assets/Sunflower_Coffee.jpg";
import Button from "./Button";

function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-2 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-28 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 py-5">
            We don't make your coffee. We make your day.
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            Sometimes we find ourselves in a tricky situation: urgently need
            coffee but have no brewing tools in hand. No worries, there are some
            simple ways to brew coffee!
          </p>
          <div className="flex justify-center py-10">
            <Button
              text="Register"
              link="login.html"
              bgColor="bg-red-500"
              hoverColor="hover:bg-red-600"
              textColor="text-white"
            />
            <Button
              text="Login"
              link="login.html"
              bgColor="bg-gray-100"
              hoverColor="hover:bg-gray-200"
              textColor="text-gray-700"
              extraClasses="ml-4"
            />
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
    </section>
  );
}

export default Hero;
