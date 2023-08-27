import ButtonBlock1 from '../components/_/button-block-1';
import Sponsors from '../components/_/sponsors';
import GoogleCalendar from '../components/_/calendar-google';
import Events from '../components/_/events2';
import Gallery from '../components/_/gallery';
import Hero from '../components/_/hero';
import Location from '../components/_/address';
import Prices from '../components/_/prices';
import Stats from '../components/_/stats';
import TextBlock1 from '../components/_/text-block-1';
import TextBlock2 from '../components/_/text-block-2';
import ToolsAndServices from '../components/_/tools-and-services';
import { Helmet } from 'react-helmet';

export default function HomepageLayout({}) {
  return (
    <>
      <Hero />
      <TextBlock1 />
      <Stats />
      <GoogleCalendar />
      <ToolsAndServices />
      <Prices />
      <ButtonBlock1 />
      <Location />
      <Gallery />
      <Sponsors />
      <Helmet>
        <title>Perth Artifactory</title>
        <meta property="og:title" content="Perth Artifactory" />
        <meta name="description" content="Perth's premier Makerspace" />
        <meta property="og:description" content="Perth's premier Makerspace" />
        <meta property="og:image" content="https://artifactory.org.au/assets/site/gallery/opengraph-social-v1.png" />
      </Helmet>
    </>
  );
}