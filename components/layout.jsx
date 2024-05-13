import Head from "next/head";
import Script from "next/script";

import { motion } from "framer-motion";

export default function Layout({ children }) {
  const outerVariants = {
    out: { opacity: 0 },
    in: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
        ease: "easeOut",
      },
    },
  };
  const childVariants = {
    out: {
      opacity: 0,
      y: -10,
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <Head>
        <title>WEATHERLIGHT</title>
        <meta
          name="description"
          content="to not build the world is to destroy it"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />

        <meta
          property="og:image"
          content="/card.png"
          key="ogimage"
        />
        <meta
          property="og:title"
          content="WEATHERLIGHT"
          key="ogtitle"
        />
        <meta
          property="og:site_name"
          content="WEATHERLIGHT"
          key="ogsitename"
        />

        <meta
          name="twitter:card"
          content="summary"
          key="twcard"
        />
        <meta
          name="twitter:creator"
          content="@weatherlight_"
          key="twhandle"
        />
      </Head>

      <motion.div
        className="min-h-screen flex flex-col gap-32 justify-evenly p-4 lg:p-8"
        variants={outerVariants}
        initial="out"
        animate="in"
      >
        <motion.header
          className="w-full max-w-md lg:max-w-6xl mx-auto text-r1"
          variants={childVariants}
        >
          <p className="opacity-50">
            WEATHERLIGHT <br />
            c/o Dr. M.A. Baytaş <br />
            41318 Göteborg
          </p>
        </motion.header>

        <motion.main
          className="w-full max-w-6xl mx-auto"
          variants={childVariants}
        >
          {children}
        </motion.main>

        <motion.footer
          className="w-full max-w-md lg:max-w-6xl mx-auto text-r1"
          variants={childVariants}
        >
          <p className="opacity-50">
            © 2021–{new Date().getFullYear()} WEATHERLIGHT AB
            <br />
            Registered in Sweden
            <br />
            Independently owned and operated
          </p>
        </motion.footer>
      </motion.div>

      <Script
        data-domain="weatherlight.com"
        src="https://plausible.io/js/plausible.js"
      ></Script>
    </>
  );
}
