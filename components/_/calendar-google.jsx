import Link from 'next/link';

export default function EventsWidget() {
  return (
    <>
      {/* Container */}
      <div className="block bg-primary-1 p-3 sm:p-6 text-maintext mb-5 sm:mb-10">
        <h3 id="calendar" className="text-center text-2xl sm:text-3xl mb-4 sm:mb-10 sm:mt-4 text-header">Events</h3>
        <iframe
          src="https://space.artifactory.org.au/calendar/calendar.html"
          width="100%"
          height="600"
          frameBorder="0"></iframe>
      </div>
    </>
  );
}
