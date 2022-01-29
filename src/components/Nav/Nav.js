import React from "react";
import s from './Nav.module.scss'

export function Nav() {
  return (
    <nav className={s.nav}>
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
    </nav>
  );
}
