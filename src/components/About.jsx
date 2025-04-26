import Images from "../assets/Images.jpeg";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";
import Image5 from "../assets/Image5.jpg";
import GalleryImage from "./GalleryImage";

const galleryImages = [Images, Image1, Image2, Image3, Image4, Image5];

function About() {
  return (
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
          {galleryImages.map((imgSrc, index) => (
            <GalleryImage key={index} src={imgSrc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
