import React from "react";
import Header from "./memeComponents/Header";
import MemeGenerator from "./memeComponents/MemeGenerator";
import Footer from "./memeComponents/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <MemeGenerator />
      <Footer />
    </React.Fragment>
  );
}

export default App;
