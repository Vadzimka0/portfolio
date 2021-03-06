import React from "react";
import s from "./Contacts.module.scss";
import common from "../common/common.module.scss";
import Zoom from "react-reveal/Zoom";

export const Contacts = () => (
  <section id="contacts" className={s.contacts}>
    <div className={common.wrapper}>
      <h2 className={common.section_title}>Please, send a message and I'll contact you</h2>
      <Zoom>
        <form action="#!">

          <div className={s.inputs}>
            <input type="text" placeholder="name *"/>
            <input type="email" placeholder="email *"/>
            <textarea className={s.textarea} placeholder="some message *"/>
          </div>

          <div className={s.btn_center}>
            <button className={s.btn}>send message</button>
          </div>

        </form>
      </Zoom>
    </div>
  </section>
);
