import { AiFillStar } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { ImKey2 } from 'react-icons/im';
import { GiGuitar } from 'react-icons/gi';
import { BsMusicNoteBeamed } from 'react-icons/bs';

export default function Prices() {
  return (
    <>
      {/* Container */}
      <div id="prices" className="block p-2 bg-secondary-1 mb-5 sm:mb-10 mx-auto max-w-sm sm:max-w-none ">
        <ul className="sm:flex sm:space-between justify-center">

        {/* Day Pass */}
          <li className="block bg-primary-1 p-6 text-maintext mt-1 sm:mt-0 mb-3 sm:mb-0 mx-auto max-w-sm sm:flex-1/4 border-2 border-secondary-1">
            <div>
              <div className="text-4xl sm:text-xl text-highlight-1">
                <ul className="block w-auto text-center my-4">
                  <li className="inline-block">
                    <AiOutlineClockCircle />
                  </li>
                </ul>
              </div>
              <span className="block text-4xl sm:text-xl text-center text-highlight-1">Day Pass</span>
              <div className="block w-100 text-center my-2 text-highlight-1">
                <span className="inline-block text-3xl text-center">$15</span>
                <span className="inline-block text-2xl text-center">/day</span>
              </div>
            </div>
            <div>
              <ul className="block w-100 text-center">
                <li className="nohover text-maintext text-sm border-b-2 border-gray-400">Use of Artifactory tools</li>
                <li className="nohover text-maintext text-sm border-b-2 border-gray-400">Pay by EFTPOS on the day</li>
                <li className="nohover text-maintext text-sm border-b-2 border-gray-400">Kitchen facilities</li>
                <li className="nohover text-maintext text-sm">Free WiFi</li>
              </ul>
            </div>
          </li>

          {/* Concession */}
          <li className="block bg-primary-1 p-6 text-maintext mb-3 sm:mb-0 mx-auto max-w-sm sm:flex-1/4 border-2 border-secondary-1 hover:border-4 hover:border-highlight-1">
            <a href="https://artifactory.tidyhq.com/public/membership_levels/53401b970f" className="plausible-event-name=Membership plausible-event-position=Comparison+Table plausible-event-membertype=Concession">
              <div>
                <div className="text-4xl sm:text-xl text-highlight-1">
                  <ul className="block w-auto text-center my-4">
                    <li className="inline-block">
                      <ImKey2 />
                    </li>
                  </ul>
                </div>
                <span className="block text-4xl sm:text-xl text-center text-highlight-1">Concession</span>
                <div className="block w-100 text-center my-2 text-highlight-1">
                  <span className="inline-block text-3xl text-center">$45</span>
                  <span className="inline-block text-2xl text-center">/mo</span>
                </div>
              </div>
              <div>
                <ul className="block w-100 text-center">
                  <li className="nohover text-maintext text-sm border-b-2 border-gray-400">24/7 Access (with bond)</li>
                  <li className="nohover text-maintext text-sm border-b-2 border-gray-400">Personal storage locker</li>
                  <li className="nohover text-maintext text-sm border-b-2 border-gray-400">Discounted tool usage fees</li>
                  <li className="nohover text-maintext text-sm">Free access to events</li>
                </ul>
              </div>
            </a>
          </li>

          {/* Full */}
          <li className="block bg-primary-1 p-6 text-maintext mb-3 sm:mb-0 mx-auto max-w-sm sm:flex-1/4 border-2 border-secondary-1 hover:border-4 hover:border-highlight-1">
            <a href="https://artifactory.tidyhq.com/public/membership_levels/57b90dbb32" className="plausible-event-name=Membership plausible-event-position=Comparison+Table plausible-event-membertype=Full">
              <div>
                <div className="text-4xl sm:text-xl text-highlight-1">
                  <ul className="block w-auto text-center my-4">
                    <li className="inline-block">
                      <ImKey2 />
                    </li>
                  </ul>
                </div>
                <span className="block text-4xl sm:text-xl text-center text-highlight-1">Full</span>
                <div className="block w-100 text-center my-2 text-highlight-1">
                  <span className="inline-block text-3xl text-center">$75</span>
                  <span className="inline-block text-2xl text-center">/mo</span>
                </div>
              </div>
              <div>
                <ul className="block w-100 text-center">
                  <li className="nohover text-maintext text-sm border-b-2 border-gray-400">24/7 Access (with bond)</li>
                  <li className="nohover text-maintext text-sm border-b-2 border-gray-400">Personal storage locker</li>
                  <li className="nohover text-maintext text-sm border-b-2 border-gray-400">Discounted tool usage fees</li>
                  <li className="nohover text-maintext text-sm">Free access to events</li>
                </ul>
              </div>
            </a>
          </li>

          {/* Band */}
          <li className="block bg-primary-1 p-6 text-maintext mb-1 sm:mb-0  mx-auto max-w-sm sm:flex-1/4 border-2 border-secondary-1 hover:border-4 hover:border-highlight-1">
            <a href="https://artifactory.tidyhq.com/public/membership_levels/NYW9Rg" className="plausible-event-name=Membership plausible-event-position=Comparison+Table plausible-event-membertype=Band">
              <div>
                <div className="text-4xl sm:text-xl text-highlight-1">
                  <ul className="block w-auto text-center my-4">
                    <li className="inline-block">
                      <BsMusicNoteBeamed />
                    </li>
                  </ul>
                </div>
                <span className="block text-4xl sm:text-xl text-center text-highlight-1">Band</span>
                <div className="block w-100 text-center my-2 text-highlight-1">
                  <span className="inline-block text-3xl text-center">$100</span>
                  <span className="inline-block text-2xl text-center">/mo</span>
                </div>
              </div>
              <div>
                <ul className="block w-100 text-center">
                  <li className="nohover text-maintext text-sm border-b-2 border-gray-400">Rehearsal room acess</li>
                  <li className="nohover text-maintext text-sm border-b-2 border-gray-400">Weekly rehearsal slots</li>
                  <li className="nohover text-maintext text-sm border-b-2 border-gray-400">PA and limited backline</li>
                  <li className="nohover text-maintext text-sm">24/7 Access (with bond)</li>
                </ul>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
