import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaYoutube, FaSlack, FaMeetup, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      {/* Container */}
      <div className="">
        {/* Contact Item List */}
        <ul className="flex justify-between w-100 sm:w-1/2 sm:mx-auto px-4 md:max-w-md mx-auto">
          {/* Contact Item List Item */}
          <li className="inline-block">
            <a
              className="block text-highlight-1 fill-current hover:text-secondary-1 text-xl sm:text-2xl md:text-3xl plausible-event-name=Slack plausible-event-position=Nav+Button"
              href="https://perart.io/slack">
              <FaSlack />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-highlight-1 fill-current hover:text-secondary-1 text-xl sm:text-2xl md:text-3xl plausible-event-name=Facebook plausible-event-position=Nav+Button"
              href="https://www.facebook.com/pages/The-Perth-Artifactory/178514525501368">
              <FaFacebook />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-highlight-1 fill-current hover:text-secondary-1 text-xl sm:text-2xl md:text-3xl"
              href="https://www.instagram.com/theperthartifactory/">
              <FaInstagram />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-highlight-1 fill-current hover:text-secondary-1 text-xl sm:text-2xl md:text-3xl plausible-event-name=Youtube plausible-event-position=Nav+Button"
              href="https://www.youtube.com/channel/UC9N4yG2QzYZV9Naud_IsUfA">
              <FaYoutube />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-highlight-1 fill-current hover:text-secondary-1 text-xl sm:text-2xl md:text-3xl plausible-event-name=Meetup plausible-event-position=Nav+Button"
              href="https://www.meetup.com/Perth-Artifactory/">
              <FaMeetup />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-highlight-1 fill-current hover:text-secondary-1 text-xl sm:text-2xl md:text-3xl plausible-event-name=Github plausible-event-position=Nav+Button"
              href="https://github.com/Perth-Artifactory">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
