export default function TextBlock2() {
  return (
    <>
      {/* Container */}
      <div className="block bg-primary-1 text-maintext p-6 mb-5 sm:mb-10">
        {/* Content */}
        <p align="justify" className="">
          If you would like to visit for a tour, come to one of our monthly Open Days on the first Saturday of every month. Other events are marked on our{' '}
          <a href="https://calendar.google.com/calendar/embed?src=q9bs8ul7umfnm4m02eq535114o%40group.calendar.google.com&amp;ctz=Australia/Perth">
            Google Calendar </a> and <a href="https://www.facebook.com/perthartifactory">Facebook</a> pages.
          <br />
          <br />
          You can also join our{' '}
          <a href="https://perart.io/slack">Slack team</a> and connect with members and like minded makers.
        </p>
      </div>
    </>
  );
}
