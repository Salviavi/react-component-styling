import Images from "../assets/Images.jpeg";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";
import Image5 from "../assets/Image5.jpg";

function GalleryImage() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-0 mx-auto flex flex-wrap">
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
    </section>
  );
}

export default GalleryImage;
