import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      <div
        id="menu-close"
        className="fixed text-highlight-1 p-3 bg-primary-1 top-2 right-2 z-10 border-2 border-nav shadow-xl"
        onClick={closeNavigation}>
        <AiOutlineClose />
      </div>
      <div
        id="menu-open"
        className="fixed text-highlight-1 p-3 bg-primary-2 top-2 right-2 z-10 border-2 border-nav shadow-xl"
        onClick={openNavigation}>
        <AiOutlineMenu />
      </div>
      {/* Container */}
      <div
        id="menu-navigation"
        className="hidden top-0 bg-primary-2 w-full h-auto sm:w-1/4 sm:border-2 sm:border-nav sm:right-0"
        style={{zIndex: 9}}>
        <span className="block text-highlight-1 mt-2 ml-4 text-2xl mb-4">Navigation</span>

        <ul className="block text-highlight-1 text-sm w-full">
          <li className="w-full block">
            <Link href="/">
              <a className="block px-4 py-2 w-full text-maintext hover:bg-primary-1 hover:text-secondary-1">Home</a>
            </Link>
          </li>

          <hr />
          {process.env.menu.map((item) => (
            <li className="w-full block" key={item.link}>
              <Link href={item.link}>
                <a className="block px-4 py-2 w-full text-maintext hover:bg-primary-1 hover:text-secondary-1">{item.name}</a>
              </Link>
            </li>
          ))}
          <hr />

          <li className="w-full block">
            <a
              href="https://wiki.artifactory.org.au/"
              className="block px-4 py-2 w-full text-maintext hover:bg-primary-1 hover:text-secondary-1 plausible-event-name=Wiki plausible-event-position=Nav+Menu">
              In depth information about our workshop
            </a>
          </li>

          <li className="w-full block">
            <a
              href="https://space.artifactory.org.au/"
              className="block px-4 py-2 w-full text-maintext hover:bg-primary-1 hover:text-secondary-1 plausible-event-name=Webcam plausible-event-position=Nav+Menu">
              Live webcam feed of the workshop
            </a>
          </li>

          <li className="w-full block">
            <a
              href="https://perart.io/slack"
              className="block px-4 py-2 w-full text-maintext hover:bg-primary-1 hover:text-secondary-1 plausible-event-name=Slack plausible-event-position=Nav+Menu">
              Engage with our community on Slack
            </a>
          </li>

          <li className="w-full block">
            <a
              href="https://perart.io/vote"
              className="block px-4 py-2 w-full text-maintext hover:bg-primary-1 hover:text-secondary-1 plausible-event-name=Loomio plausible-event-position=Nav+Menu">
              Have your say on our discussion and voting platform
            </a>
          </li>

          <li className="w-full block">
            <a
              href="https://m.facebook.com/perthartifactory/"
              className="block px-4 py-2 w-full text-maintext hover:bg-primary-1 hover:text-secondary-1 plausible-event-name=Facebook plausible-event-position=Nav+Menu">
              Facebook
            </a>
          </li>

          <li className="w-full block">
            <a
              href="https://www.instagram.com/theperthartifactory/"
              className="block px-4 py-2 w-full text-maintext hover:bg-primary-1 hover:text-secondary-1 plausible-event-name=Instagram plausible-event-position=Nav+Menu">
              Instagram
            </a>
          </li>

          <li className="w-full block">
            <a
              href="https://www.youtube.com/channel/UC9N4yG2QzYZV9Naud_IsUfA/"
              className="block px-4 py-2 w-full text-maintext hover:bg-primary-1 hover:text-secondary-1 plausible-event-name=Youtube plausible-event-position=Nav+Menu">
              Youtube
            </a>
          </li>
          
          <li className="w-full block">
            <a
              href="https://www.meetup.com/Perth-Artifactory/"
              className="block px-4 py-2 w-full text-maintext hover:bg-primary-1 hover:text-secondary-1 plausible-event-name=Meetup plausible-event-position=Nav+Menu">
              Meetup
            </a>
          </li>

        </ul>
      </div>
    </>
  );
}

const openNavigation = function () {
  let menuNavigation = document.getElementById('menu-navigation');
  let menuClose = document.getElementById('menu-close');
  let menuOpen = document.getElementById('menu-open');
  let body = document.getElementById('app');
  if (menuNavigation.classList.contains('hidden')) {
    menuNavigation.classList.remove('hidden');
    menuNavigation.classList.add('fixed');
    //
    menuOpen.classList.remove('fixed');
    menuOpen.classList.add('hidden');
    //
    menuClose.classList.remove('hidden');
    menuClose.classList.add('fixed');
    //
    body.classList.add('overflow-hidden');
  }
};

const closeNavigation = function () {
  let menuNavigation = document.getElementById('menu-navigation');
  let menuClose = document.getElementById('menu-close');
  let menuOpen = document.getElementById('menu-open');
  let body = document.getElementById('app');
  if (menuNavigation.classList.contains('fixed')) {
    menuNavigation.classList.remove('fixed');
    menuNavigation.classList.add('hidden');
    //
    menuClose.classList.remove('fixed');
    menuClose.classList.add('hidden');
    //
    menuOpen.classList.remove('hidden');
    menuOpen.classList.add('fixed');
    //
    body.classList.remove('overflow-hidden');
  }
};
