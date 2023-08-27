import SponsorBlock from '../components/sponsor-block';

export default function SponsorBlockContainer({ allSponsors }) {
  return (
    <>
      {/* Sponsor Container */}
      <section className="flex-col md:flex-row flex flex-wrap items-center md:justify-center md:mb-12 bg-primary-2 py-16 pb-8 shadow-xl">
        <ul className="flex flex-wrap justify-center">
          {allSponsors.length > 0 && <SponsorBlock sponsors={allSponsors}></SponsorBlock>}
        </ul>
      </section>
    </>
  );
}
