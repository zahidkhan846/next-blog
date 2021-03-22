import Layout from "../components/Layout/Layout";
import AlertProvider from "../store/AlertContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AlertProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AlertProvider>
  );
}

export default MyApp;
