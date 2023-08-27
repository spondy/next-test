/** @format */

export default function SponsorBlock(allSponsors) {
  console.log(allSponsors);
  return (
    <>
      {allSponsors.sponsors.map((sponsor, index) => (
        <li
          key={index}
          className="
            bg-primary-1
            border-2
            border-secondary-2
            cursor-pointer
            flex
            flex-col
            justify-center
            md:flex-row
            md:flex-no-wrap
            font-medium
            hover:border-highlight-1
            inline-block
            md:items-start
            mb-8
            mx-4
            p-6
            rounded-sm
            shadow-xl
            text-secondary-1
            transition-colors
            md:w-2/5
            shadow-xl
          ">
          <img
            className="
              block
              h-auto
              w-auto
              md:mr-4
              md:self-center
              md:w-1/4
            "
            src={sponsor.imageUrl}
          />
          <div className="w-100 md:w-3/4 mt-4 md:mt-auto">
            <span className="block text-2xl font-bold mb-4 text-center md:text-left">{sponsor.name}</span>
            <p className="text-center md:text-left">{sponsor.description}</p>
          </div>
        </li>
      ))}
    </>
  );
}
