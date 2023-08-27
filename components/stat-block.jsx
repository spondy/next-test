/** @format */

export default function StatBlock(allStats) {
  return (
    <>
      {allStats.stats.map((stat, index) => (
        <li
          key={index}
          className="inline-block mr-2 mb-2 px-3 py-3 bg-secondary-3 pr-20 text-gray-700 shadow-xl cursor-pointer font-medium bg-gradient-to-tr from-secondary-1 shadow-xl">
          {stat.name}
          <div className="flex flex-no-wrap w-full">
            <span className="mr-2 text-3xl">↑</span>
            {/* <span className="mr-2 text-3xl">{stat.icon}</span> */}
            <span className="text-3xl font-bold">{stat.value}</span>
          </div>
        </li>
      ))}
    </>
  );
}
