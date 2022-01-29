import React from "react";
import s from './Header.module.scss'
import common from "../common/common.module.scss";
import {Nav} from "../Nav/Nav";

export const Header = () => (
  <header className={s.header}>
    <div className={common.wrapper}>
      <Nav/>
    </div>
  </header>
);
