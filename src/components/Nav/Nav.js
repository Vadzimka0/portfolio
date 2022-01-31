import React from "react";
import s from './Nav.module.scss'
import Fade from "react-reveal/Fade";
import {Link, animateScroll as scroll} from "react-scroll";

export function Nav() {
  return (
    <nav className={s.nav}>
      <Fade right>
        <ul className={s.items}>
          <li className={s.item}>
            <a href="#!">About me</a>
          </li>
          <li className={s.item}>
            <Link
              activeClass={s.active}
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >Skills</Link>
          </li>
          <li className={s.item}>
            <Link
              activeClass={s.active}
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >Projects</Link>
          </li>
          <li className={s.item}>
            <Link
              activeClass={s.active}
              to="contacts"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >Contacts</Link>
          </li>
        </ul>
      </Fade>
    </nav>
  );
}
