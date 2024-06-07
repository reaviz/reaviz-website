import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:image" content="https://reaviz-website.netlify.app/preview.png" />
        <meta
          property="og:title"
          content="Reaviz - Open Source ReactJS Chart Component Library"
        />
        <meta
          property="og:description"
          content="Modular chart component library that leverages React natively for rendering the components while using D3js under the hood for calculations."
        />
        <meta
          name="twitter:title"
          content="Reaviz - Open Source ReactJS Chart Component Library"
        />
        <meta
          name="twitter:description"
          content="Modular chart component library that leverages React natively for rendering the components while using D3js under the hood for calculations."
        />
      </Head>
      <body>
        <Main suppressHydrationWarning />
        <NextScript />
      </body>
    </Html>
  );
}
