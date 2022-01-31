import React from "react";
import s from "./Skills.module.scss";
import common from "../common/common.module.scss";
import {SiCss3, SiHtml5, SiJavascript, SiReact, SiRedux, SiTypescript} from "react-icons/si";
import Slide from "react-reveal/Slide";

export const Skills = () => (
  <section id="skills" className={s.skills}>
    <div className={common.wrapper}>

      <h2 className={common.section_title}>Skills</h2>

      <Slide right>
        <div className={s.skills_items}>

          <div className={s.skill}>
            <h4 className={s.skill_title}>React</h4>
            <div className={s.logo}>
              <SiReact/>
            </div>
          </div>

          <div className={s.skill}>
            <h4 className={s.skill_title}>Redux</h4>
            <div className={s.logo}>
              <SiRedux/>
            </div>
          </div>

          <div className={s.skill}>
            <h4 className={s.skill_title}>Typescript</h4>
            <div className={s.logo}>
              <SiTypescript/>
            </div>
          </div>

          <div className={s.skill}>
            <h4 className={s.skill_title}>Javascript</h4>
            <div className={s.logo}>
              <SiJavascript/>
            </div>
          </div>

          <div className={s.skill}>
            <h4 className={s.skill_title}>HTML5</h4>
            <div className={s.logo}>
              <SiHtml5/>
            </div>
          </div>

          <div className={s.skill}>
            <h4 className={s.skill_title}>CSS3</h4>
            <div className={s.logo}>
              <SiCss3/>
            </div>
          </div>


        </div>
      </Slide>

    </div>

  </section>
);
