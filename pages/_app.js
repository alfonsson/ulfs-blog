import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import Script from 'next/script';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.skypack.dev/remark-gfm@1.0.0" />
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
