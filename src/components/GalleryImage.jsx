function GalleryImage({ src }) {
  return (
    <div className="flex flex-wrap w-1/2">
      <div className="md:p-2 p-1 w-1/2">
        <img
          alt="gallery"
          className="w-full object-cover h-full object-center block"
          src={src}
        />
      </div>
    </div>
  );
}

export default GalleryImage;
