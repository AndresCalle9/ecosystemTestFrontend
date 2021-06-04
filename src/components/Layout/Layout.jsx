import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";



const Layout = ({ children }) => {
  const [session, setSession] = useState({
    id: "",
    session: false,
    token: ""
  });
  
  useEffect(() => {
  setSession({
    id: sessionStorage.getItem("idPPP") || "",
    session: sessionStorage.getItem("sessionPPP") || false,
    token: sessionStorage.getItem("tokenPPP") || ""
  });
  }, [children]);
  return (
    <div>
      {<Header />}
      {children}
      {<Footer />}
    </div>
  );
};

export default Layout;
