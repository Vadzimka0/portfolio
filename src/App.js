import React from 'react'
import {Header} from "./components/Header/Header";
import {Projects} from "./components/Projects/Projects";
import {Skills} from "./components/Skills/Skills";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";
import {AboutMe} from "./components/AboutMe/AboutMe";

const App = () => (
  <div>
    <Header/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Contacts/>
    <Footer/>
  </div>
);

export default App;
