/** @format */

export default function Gallery(allAssets) {
  console.log(allAssets);
  allAssets = allAssets.allAssets;
  return (
    <>
      <section
        className="
          bg-primary-2
          flex
          flex-col
          md:flex-row
          md:mb-12
          md:px-8
          md:py-16
          my-16
          p-4
          shadow-xl
        ">
        <div
          className="
            flex 
            flex-wrap 
            items-center
          ">
          <img
            id="gallery-large-image"
            className="
                block 
                border-2 
                border-primary-1
                h-auto 
                md:w-1/2 
                w-full 
                shadow-xl
              "
            src={allAssets[0].url}
            alt={allAssets[0].alt}
          />

          <ul
            className="
              flex
              flex-wrap
              justify-between
              md:mt-0
              md:pl-2
              md:w-1/2
              mt-4
              w-full
          ">
            {allAssets.map((asset, index) => (
              <li className="m-1 md:m-2 flex-1/3 md:flex-1/2 md:mr-0" key={index}>
                <img
                  className="
                      block
                      border-2
                      border-secondary-1
                      cursor-pointer
                      focus:border-highlight-1
                      h-auto
                      hover:border-highlight-1
                      rounded-sm
                      w-100
                      shadow-xl
                    "
                  src={asset.url}
                  alt={asset.alt}
                  onClick={(e) => alternateImage(e.currentTarget)}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function alternateImage(e) {
  document.getElementById('gallery-large-image').src = e.src;
}
