export default function Address() {
  return (
    <>
      <div className="block bg-primary-1 p-3 sm:p-6 text-maintext mb-5 sm:mb-10">
        <h3 id="map" className="text-center text-2xl sm:text-3xl mb-4 sm:mb-10 sm:mt-4 text-header">Location</h3>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.173686881216!2d115.80801111533235!3d-31.90187792709456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32afa21e4de70f%3A0x2249a8489669686a!2s8%2F16%20Guthrie%20St%2C%20Osborne%20Park%20WA%206017!5e0!3m2!1sen!2sau!4v1610167974057!5m2!1sen!2sau"
          width="100%"
          className="mb-4 h-mapSmall sm:h-map"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"></iframe>

        <address className="block">
          Unit 8 / 16 Guthrie Street
          <br />
          Osborne Park WA 6017
        </address>
      </div>
    </>
  );
}
