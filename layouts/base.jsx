import Head from 'next/head';
import Alert from '../components/_/alert';
import Container from '../components/_/container';
import Footer from '../components/_/footer';
import Header from '../components/_/header';
import Meta from '../components/_/meta';
import Navigation from '../components/_/navigation';

export default function BaseLayout({ children }) {
  return (
    <>
      {/* HEAD */}
      <Head>
        <title>Artifactory</title>
        <Meta />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G5L8KSNKCF" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G5L8KSNKCF');
        `,
          }}
        />
      </Head>


      <div className="bg-primary-2" id="app">
        {/* ALERT - This is the banner alert at the top of the page */}
        {/* <Alert /> */}

        {/* Navigation Component */}
        <Navigation />

        {/* HEADER */}
        <Header>
          {/* HEADER - LOGO */}
          {/* HEADER - SOCIALS */}
        </Header>
        {/* MAIN */}
        <Container>{children}</Container>
        <Footer>
          {/* FOOTER - MORE INFO */}
          {/* FOOTER - SITEMAP */}
        </Footer>
      </div>
    </>
  );
}
