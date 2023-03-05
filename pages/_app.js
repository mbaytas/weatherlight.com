import { DefaultSeo } from "next-seo";

import "../styles/globals.css";

import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo
        title={undefined}
        titleTemplate="%s | WEATHERLIGHT"
        defaultTitle="WEATHERLIGHT"
        description="venture studio | no signal without noise"
        openGraph={{
          type: "website",
          locale: "en",
          url: "https://www.weatherlight.com",
          siteName: "WEATHERLIGHT",
          images: [
            {
              url: "https://www.weatherlight.com/card_default.png",
              width: 1920,
              height: 1080,
              alt: "WEATHERLIGHT",
              type: "image/png",
            },
          ],
          siteName: "WEATHERLIGHT",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
