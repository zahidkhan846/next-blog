import Layout from "../components/Layout/Layout";
import AlertProvider from "../store/AlertContext";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <AlertProvider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AlertProvider>
  );
}

export default MyApp;
