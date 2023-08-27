export default function Gallery() {
  return (
    <>
      {/* public/assets/site/gallery/20181005_203737.jpg public/assets/site/gallery/20190601_162916.jpg
      public/assets/site/gallery/20190601_192540.jpg public/assets/site/gallery/20190616_121402-(1).jpg
      public/assets/site/gallery/20190616_121402.jpg public/assets/site/gallery/20190616_162012.jpg
      public/assets/site/gallery/20190630_212304.jpg */}
      {/* Container */}
      <div id="images" className="flex flex-col align-center mb-5 sm:mb-10 bg-primary-1 p-6">
        {/* Image Container */}
        <div className="block w-100 mb-2 sm:mb-10">
          <img
            className="border-2 border-secondary-1 mx-auto sm:border-3 md:border-4 lg:border-5"
            src="assets/site/gallery/20190616_121125.jpg"
            alt="Gallery Image"
            id="gallery-large-image"
          />
        </div>
        {/* Mini Image Container */}
        <div className="block w-100">
          {/* Image List */}
          <ul className="flex flex-wrap">
            <li className="block w-1/2 p-1 md:w-1/3 border-2 border-primary-1 hover:border-2 hover:border-highlight-1">
              {/* Image */}
              <img
                className="block w-100 h-auto cursor-pointer"
                src="assets/site/gallery/20190616_121125.jpg"
                alt=""
                onClick={(e) => alternateImage(e.currentTarget)}
              />
            </li>
            <li className="block w-1/2 p-1 md:w-1/3 border-2 border-primary-1 hover:border-2 hover:border-highlight-1">
              <img
                className="block w-100 h-auto cursor-pointer"
                src="assets/site/gallery/20181020_190202.jpg"
                alt=""
                onClick={(e) => alternateImage(e.currentTarget)}
              />
            </li>
            <li className="block w-1/2 p-1 md:w-1/3 border-2 border-primary-1 hover:border-2 hover:border-highlight-1">
              <img
                className="block w-100 h-auto cursor-pointer"
                src="assets/site/gallery/20190413_173154.jpg"
                alt=""
                onClick={(e) => alternateImage(e.currentTarget)}
              />
            </li>
            <li className="block w-1/2 p-1 md:w-1/3 border-2 border-primary-1 hover:border-2 hover:border-highlight-1">
              <img
                className="block w-100 h-auto cursor-pointer"
                src="assets/site/gallery/20181120_210525.jpg"
                alt=""
                onClick={(e) => alternateImage(e.currentTarget)}
              />
            </li>
            <li className="block w-1/2 p-1 md:w-1/3 border-2 border-primary-1 hover:border-2 hover:border-highlight-1">
              <img
                className="block w-100 h-auto cursor-pointer"
                src="assets/site/gallery/20181123_002935.jpg"
                alt=""
                onClick={(e) => alternateImage(e.currentTarget)}
              />
            </li>
            <li className="block w-1/2 p-1 md:w-1/3 border-2 border-primary-1 hover:border-2 hover:border-highlight-1">
              <img
                className="block w-100 h-auto cursor-pointer"
                src="assets/site/gallery/20181207_183833.jpg"
                alt=""
                onClick={(e) => alternateImage(e.currentTarget)}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function alternateImage(e) {
  document.getElementById('gallery-large-image').src = e.src;
}
