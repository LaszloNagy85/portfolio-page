import React, { useState } from 'react';
import './App.css';

const App = (props) => {
  const title = "Laszlo Nagy"
  const headerLinks = [
    { title: "Home", path : "/" },
    { title: "About", path : "/about" },
    { title: "Contact", path : "/contact" },
  ]
  const home = {
    title: "Be Aspiring",
    subtitle: "Projects that make a difference",
    subtext: "Check out my projects below"
  }
  const about = {
    title: "About Me"
  }
  const contact = {
    title: "Let's Talk"
  }
  return (
    <div>Welcome to my Portfolio page</div>
  );
}

export default App;
