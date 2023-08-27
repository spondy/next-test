import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* Container */}
      <div className="bg-secondary-1 p-3 sm:flex">

        {/* Sitemap Container */}
        <div className="block w-100 mb-4 p-6 bg-primary-2 text-maintext sm:mr-2 min-w-1/4 sm:mb-0">
          <span className="text-highlight-1 text-lg sm:text-xl block mb-2 sm:mb-4 font-semibold border-b-2 border-secondary-1">
            Sitemap
          </span>
          <ul>
            <li><Link href="/"><a className="text-maintext">Home</a></Link></li>
            <li><Link href="/pages/first_visit"><a className="text-maintext">Plan your first visit</a></Link></li>
            <li><Link href="/#calendar"><a className="text-maintext">Upcoming events</a></Link></li>
            <li><Link href="/pages/membership"><a className="text-maintext">Membership</a></Link></li>
            <li><Link href="/pages/freeMembership"><a className="text-maintext">Sponsored memberships</a></Link></li>
            <li><Link href="https://wiki.artifactory.org.au/"><a className="text-maintext">Workshop documentation</a></Link></li>
            <li><Link href="https://space.artifactory.org.au/"><a className="text-maintext">Webcam feed</a></Link></li>
            <li><Link href="/pages/code_of_conduct"><a className="text-maintext">Code of Conduct</a></Link></li>
            <li><Link href="https://perart.io/vote"><a className="text-maintext">Discussion and voting</a></Link></li>
          </ul>
        </div>

        {/* More Info Container */}
        <div className="block w-100 bg-primary-2 p-6 text-maintext sm:flex-1">
          <ul className="md:flex">
            <li className="block md:w-1/2 md:mr-6">
              <span className="text-highlight-1 text-lg sm:text-xl block mb-2 sm:mb-4 font-semibold border-b-2 border-secondary-1">
                More Info
              </span>
              <p>
                If you need further contact, you can easily message us by{' '}
                <a className="text-secondary-1" href="mailto:info@artifactory.org.au">
                  email
                </a>
                .
              </p>

              {/* Similar Places List */}
              <span className="text-highlight-1 text-lg sm:text-xl block mb-2 my-2 sm:my-4 font-semibold border-b-2 border-secondary-1">
                Australian Makerspaces
              </span>
              <ul>
                <li><a className="text-maintext" href="https://canberramaker.space/">ACT: Make, Hack, Void</a></li>
                <li><a className="text-maintext" href="https://robodino.org/">NSW: Robots & Dinosaurs</a></li>
                <li><a className="text-maintext" href="https://www.hackerspace-adelaide.org.au/">SA: Hackerspace Adelaide</a></li>
                <li><a className="text-maintext" href="https://www.hobarthackerspace.org.au/">TAS: Hobart Hackerspace</a></li>
                <li><a className="text-maintext" href="https://hsbne.org/">QLD: HSBNE</a></li>
                <li><a className="text-maintext" href="https://brisbanemaker.space/">QLD: Brisbane Makerspace</a></li>
                <li><a className="text-maintext" href="https://hackmelbourne.com/">VIC: CCHS</a></li>
                <li><a className="text-maintext" href="http://swmakers.org/">WA: South West Makers</a></li>
              </ul>
            </li>
            <li className="block md:w-1/2">
              <span className="text-highlight-1 text-lg sm:text-xl block mb-2 my-2 md:mt-0 sm:my-4 font-semibold border-b-2 border-secondary-1">
                Friends
              </span>
              <ul>
                <li><a className="text-maintext" href="http://www.artsource.net.au/">Artsource</a></li>
                <li><a className="text-maintext" href="http://blazingswan.com.au/">Blazing Swan</a></li>
                <li><a className="text-maintext" href="http://swancon.com.au/">Swancon</a></li>
              </ul>

              <span className="text-highlight-1 text-lg sm:text-xl block mb-2 my-2 sm:my-4 font-semibold border-b-2 border-secondary-1">
                Affiliated Groups
              </span>
              <ul>
                <li><a className="text-maintext" href="http://www.adug.org.au/meetings/overview/">ADUG WA</a></li>
                <li><a className="text-maintext" href="https://www.noizemaschin.com/">NoizeMaschin!!</a></li>
                <li><a className="text-maintext" href="https://www.meetup.com/en-AU/Perth-Django-Users-Group/">Perth Djano and Python Developers</a></li>
                <li><a className="text-maintext" href="https://www.pmlg.org/">Perth Machine Learning Group</a></li>
                <li><a className="text-maintext" href="https://www.meetup.com/Perth-Linux-Users-Group-PLUG/">Perth Linux Users Group</a></li>
                <li><a className="text-maintext" href="https://www.facebook.com/WAMod-West-Australian-Modular-Synthesizers-416747535171732/">WAMod</a></li>
              </ul>
            </li>
          </ul>

	      </div>

      </div>
    </>
  );
}
