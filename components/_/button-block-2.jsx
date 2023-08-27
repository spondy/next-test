export default function ButtonBlock1() {
  return (
    <>
      {/* Container */}
      <div className="mb-5 sm:mb-10 sm:max-w-xl mx-auto">
        {/* Button List */}
        <ul className="sm:flex justify-center">
          {/* Button List Item */}
          {/* Contains extra classes. */}
          <li className="block max-w-xs mb-2 mx-auto text-center w-100 sm:flex-grow sm:inline-block sm:mb-0 sm:mr-2 sm:w-1/2">
            {/* Button */}
            <a
              className="block buttonhover p-2 bg-secondary-1 hover:bg-secondary-3 focus:bg-secondary-3 text-highlight-1 hover:text-highlight-1 font-semibold plausible-event-name=Webcams plausible-event-position=Center+Button"
              href="https://space.artifactory.org.au/">
              Check the Webcams
            </a>
          </li>
          <li className="block max-w-xs mb-2 mx-auto text-center w-100 sm:flex-grow sm:inline-block sm:mb-0 sm:mr-0 sm:w-1/2">
            {/* Outbound links will need the Next.js Link component */}
            <a
              className="block buttonhover p-2 bg-secondary-1 hover:bg-secondary-3 focus:bg-secondary-3 text-highlight-1 hover:text-highlight-1 font-semibold plausible-event-name=Wiki plausible-event-position=Center+Button"
              href="https://wiki.artifactory.org.au/">
              Visit the Wiki
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
