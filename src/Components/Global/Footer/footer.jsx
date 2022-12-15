import React from "react";
import "./footer.css";
import { CgCopyright } from "react-icons/cg";

function Footer() {
  return (
    <footer>
      ITXI Book Store <CgCopyright /> {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
