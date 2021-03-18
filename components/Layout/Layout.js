import { Fragment } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
