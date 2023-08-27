import Base from '../layouts/base';
import HomepageLayout from '../layouts/homepage';

export default function App({ children }) {
  return (
    <>
      <Base>
        <HomepageLayout />
      </Base>
    </>
  );
}
