export default function TextBlock({ content, alignment, imgUrl }) {
  let alignmentClassList = alignment == 'left' ? 'ml-0 mr-auto pl-8 md:pl-24' : 'mr-0 ml-auto pr-8 md:pr-24';
  return (
    <>
      <section
        className="flex-col md:flex-row flex items-center md:justify-between md:mt-16 md:mb-16 bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${imgUrl})`, backgroundPosition: 'center right 20px' }}>
        <div
          className={`block md:w-1/2 bg-primary-2 md:mr-2 md:mb-2 p-4 md:p-8 text-gray-300 shadow-xl ${alignmentClassList}`}>
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
      </section>
    </>
  );
}
