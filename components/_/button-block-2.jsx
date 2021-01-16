export default function ButtonBlock1() {
  return (
    <>
      {/* Container */}
      <div className="mb-2 sm:mb-4 md:max-w-xl mx-auto">
        {/* Button List */}
        <ul className="sm:flex justify-center">
          {/* Button List Item */}
          {/* Contains extra classes. */}
          <li className="block max-w-xs mb-2 mx-auto text-center w-100 sm:flex-grow sm:inline-block sm:mb-0 sm:mr-2 sm:w-1/2">
            {/* Button */}
            <a
              className="block p-2 bg-secondary-1 hover:bg-secondary-2 focus:bg-secondary-2 text-primary-2 font-semibold"
              href="#">
              Check the Webcams
            </a>
          </li>
          <li className="block max-w-xs mb-2 mx-auto text-center w-100 sm:flex-grow sm:inline-block sm:mb-0 sm:mr-0 sm:w-1/2">
            {/* Outbound links will need the Next.js Link component */}
            <a
              className="block p-2 bg-secondary-1 hover:bg-secondary-2 focus:bg-secondary-2 text-primary-2 font-semibold"
              href="#">
              Visit the Wiki
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
