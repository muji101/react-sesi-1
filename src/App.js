// import Introduction from './components/introduction';
// import Profile from './components/profile';
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./App.css";

import React, { useState } from "react";


function App() {
  const navHeading = 'Navigation Bar';
  const navText = 'MUJI KUWAT';

  const clicked = () => {
    return alert("button di pencet");
  }

  const paragraf = () => {
    return (
      <div>
        <h3>Mantap bang</h3>
        <i>horeee</i>
        <marquee>jos tenan rek</marquee>
      </div>
    );
  };

  // const traceButton = () => {
  //   alert("mantap sekali");
  //   console.log('button di click');
  // }

  //implement useState

  //get = nilai akhir, set = nilai awal
  const [getNavbarValue, setNavbarValue] = useState("");

  const changeNavbarValue = () => {
    setNavbarValue('My Contact');
  }



  return (
    <div className="App">
      <header className="App-header">
        <Navbar navText={navText} navHeading={navHeading} navValue={getNavbarValue} />
        {/* <Profile /> */}
        {/* <h1>sesi 1</h1>
        <Introduction name="muji" />
        <Introduction name="kuwat" /> */}
        <MyButton clicked={clicked} />

        <button onClick={() => changeNavbarValue()}>Ubah Navigasi</button>
        <Footer paragraf={paragraf} />
      </header>
    </div>
  );
}

export default App;
