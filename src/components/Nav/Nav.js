import React from "react";
import s from './Nav.module.scss'
import Fade from "react-reveal/Fade";

export function Nav() {
  return (
    <nav className={s.nav}>
      <Fade right>
        <ul className={s.items}>
          <li className={s.item}>
            <a className={s.link} href="#!">About me</a>
          </li>
          <li className={s.item}>
            <a className={s.link} href="#!">Skills</a>
          </li>
          <li className={s.item}>
            <a className={s.link} href="#!">Projects</a>
          </li>
          <li className={s.item}>
            <a className={s.link} href="#!">Contacts</a>
          </li>
        </ul>
      </Fade>
    </nav>
  );
}
