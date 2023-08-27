export default function Button({ url, content, variant }) {
  const variantModifier = variant == '1' ? 'primary' : 'secondary';
  return (
    <>
      <a
        href={url}
        className={`inline-block m-2 px-3 py-3 bg-${variantModifier}-3 pr-20 text-gray-700 hover:bg-${variantModifier}-2 transition-colors shadow-xl font-medium bg-gradient-to-tr from-secondary-1`}>
        {content}
      </a>
    </>
  );
}
