import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";
import Links from "./Links"

function App() {
  // Destructure the user object for clarity
  const { name, city, color, bio, links } = user;
  const { github, linkedin } = links;

  return (
    <div>
      <NavBar />
     
      <Home name={name} city={city} color={color} />
      
      <About bio={bio} github={github} linkedin={linkedin} />
    </div>
  );
}

export default App;
