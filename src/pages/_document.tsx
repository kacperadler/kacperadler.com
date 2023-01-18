import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { ENV } from 'shared/config/env';

export default function Document() {
  return (
    <Html lang="en" className="dark:bg-neutral-900">
      <Head>
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${ENV.G_TAG}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${ENV.G_TAG}');
          `}
        </Script>
        <link
          href="https://raw.githubusercontent.com/PrismJS/prism-themes/master/themes/prism-atom-dark.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
