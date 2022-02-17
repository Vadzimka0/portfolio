import React from "react";
import s from "./Projects.module.scss";
import common from "../common/common.module.scss";
import todo from "../../assets/img/todo.png";
import cards from "../../assets/img/cards.png";
import counter from "../../assets/img/counter.png";
import piano from "../../assets/img/piano.jpg";

export const Projects = () => (
  <section id="projects" className={s.projects}>
    <div className={common.wrapper}>

      <h2 className={common.section_title}>Projects</h2>
      <div className={s.projects_items}>

        <div className={s.project}>
          <div className={s.pic}>
            <img className={s.pic_bg} src={todo} alt="react todo"/>
            <div className={s.links}>
              <a className={s.btn} href="https://Vadzimka0.github.io/todolist-project" target="_blank"
                 rel="noreferrer">Demo</a>
              <a className={s.btn} href="https://github.com/Vadzimka0/todolist-project" target="_blank"
                 rel="noreferrer">Code</a>
            </div>
          </div>
          <div className={s.project_title}>
            <h4>ToDo List</h4>
          </div>
          <p className={s.project_description}>
            React, Redux, Typescript<br/>
            REST API, Axios <br/>
            Material UI, Eslint, Prettier
          </p>
        </div>

        <div className={s.project}>
          <div className={s.pic}>
            <img className={s.pic_bg} src={cards} alt="learning cards"/>
            <div className={s.links}>
              <a className={s.btn} href="https://alexjhc.github.io/Friday/" target="_blank" rel="noreferrer">Demo</a>
              <a className={s.btn} href="https://github.com/AlexJHC/Friday" target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
          <div className={s.project_title}>
            <h4>Learning Cards</h4>
          </div>
          <p className={s.project_description}>
            React, Redux, Typescript<br/>
            REST API, Axios <br/>
            Teamwork
          </p>
        </div>

        <div className={s.project}>
          <div className={s.pic}>
            <img className={s.pic_bg} src={counter} alt="react counter"/>
            <div className={s.links}>
              <a className={s.btn} href="https://vadzimka0.github.io/simple-counter/" target="_blank" rel="noreferrer">Demo</a>
              <a className={s.btn} href="https://github.com/Vadzimka0/simple-counter" target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
          <div className={s.project_title}>
            <h4>Counter</h4>
          </div>
          <p className={s.project_description}>
            React, Redux, Typescript<br/>
            Local Storage <br/>
          </p>
        </div>

        <div className={s.project}>
          <div className={s.pic}>
            <img className={s.pic_bg} src={piano} alt="javascript piano"/>
            <div className={s.links}>
              <a className={s.btn} href="https://rolling-scopes-school.github.io/vadzimka0-JSFE2021Q1/virtual-piano/" target="_blank" rel="noreferrer">Demo</a>
              <a className={s.btn} href="https://github.com/rolling-scopes-school/vadzimka0-JSFE2021Q1/tree/virtual-piano" target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
          <div className={s.project_title}>
            <h4>Virtual Piano</h4>
          </div>
          <p className={s.project_description}>
            Javascript
          </p>
        </div>

      </div>
    </div>
  </section>
);
