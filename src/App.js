import React from "react";
import { BrowserRouter } from "react-router-dom";


import MainNavigation from "./shared/navigation/MainNavigation";
import Main from "./main/Main";
import Footer from "./shared/footer/Footer";

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavigation />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
