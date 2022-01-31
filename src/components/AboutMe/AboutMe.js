import React from "react";
import s from "./AboutMe.module.scss";
import common from "../common/common.module.scss";
import photo from "./../../assets/img/me3.jpg"
import ReactTypingEffect from 'react-typing-effect';

export const AboutMe = () => (
  <section className={s.about_me}>
    <div className={common.wrapper}>

      <div className={s.content}>
        <div className={s.text}>
          <p>Hi, my name is<br/><span>Vadzim Dzianisik</span></p>
          <p>and i'm a<br/>
            <span>
              <ReactTypingEffect text="Front-end Developer"/>
            </span>
          </p>
        </div>

        <div className={s.picture}>
          <div className={s.background_border}>
            <img className={s.photo} src={photo} alt="selfie"/>
          </div>
        </div>

      </div>

    </div>
  </section>
);
