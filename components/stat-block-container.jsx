/** @format */

import StatBlock from '../components/stat-block';

export default function StatBlockContainer({ allStats }) {
  return (
    <>
      {/* <!-- Stat Block Container --> */}
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <ul className="flex flex-wrap max-w-lg mr-0 ml-auto justify-end">
          {allStats.length > 0 && <StatBlock stats={allStats}></StatBlock>}
        </ul>
      </section>
    </>
  );
}
