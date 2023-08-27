export default function Donations() {
  return (
    <>
      {/* Container */}
      <div className="block bg-primary-1 p-6 pb-0 text-maintext mb-5 sm:mb-10">
        <h3 className="text-center text-2xl mb-4 mt-6 mb-10 sm:text-3xl sm:mb-10 sm:mt-4 text-header">Upcoming Events</h3>
        {/* Donation List */}
        <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">

          {/* NM */}
          <li className="block border-2 border-secondary-2 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="https://www.facebook.com/groups/noizemaschin/">
              {/* Image */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/events/nm.png" alt="#" />
              {/* Title */}
              <span className="block w-100 mb-4 text-center text-highlight-1">NoizeMaschin!!</span>
              {/* Description */}
              <p className="block w-100 text-center text-sm">
                NoizeMachin!! is a Noise and Experimental Music concert held once a month.
              </p>
            </a>
          </li>

          {/* LotteryWest */}
          <li className="block border-2 border-secondary-2 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="https://www.facebook.com/WAMod-West-Australian-Modular-Synthesizers-416747535171732">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/events/wamod.png" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center text-highlight-1">WAMod Synth Workshop</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                West Australian based community interested in building, playing and performing with analogue modular synthesizers.
              </p>
            </a>
          </li>

          {/* PentaNet */}
          <li className="block border-2 border-secondary-2 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="#">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/events/arduino.png" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center text-highlight-1">Arduino U</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                An evening of talking and hacking on Arduino microcontrollers.
              </p>
            </a>
          </li>

          <li className="block border-2 border-secondary-2 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="#">
              {/* Image */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/events/ww.png" alt="#" />
              {/* Title */}
              <span className="block w-100 mb-4 text-center text-highlight-1">Workshop Wednesdays</span>
              {/* Description */}
              <p className="block w-100 text-center text-sm">
                The space will be open for members, non-members, and visitors that want time to work on projects during the day or just want to check us out.
              </p>
            </a>
          </li>

          {/* LAN */}
          <li className="block border-2 border-secondary-2 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="#">
              {/* Image */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/events/lan.png" alt="#" />
              {/* Title */}
              <span className="block w-100 mb-4 text-center text-highlight-1">Artifrag LAN</span>
              {/* Description */}
              <p className="block w-100 text-center text-sm">
                The Artifactory is having it's tenth gaming LAN party and you're all invited! Come along, play games, and enjoy many hours of gaming fun!
              </p>
            </a>
          </li>

          <li className="block border-2 border-secondary-2 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="#">
              {/* Image */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/events/open.png" alt="#" />
              {/* Title */}
              <span className="block w-100 mb-4 text-center text-highlight-1">Open Day</span>
              {/* Description */}
              <p className="block w-100 text-center text-sm">
                Come and get a tour of The Perth Artifactory and talk to our members about what you can do there and what goes on.
              </p>
            </a>
          </li>

        </ul>
      </div>
    </>
  );
}
