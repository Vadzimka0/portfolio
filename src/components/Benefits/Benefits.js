import React from "react";
import s from "../Benefits/Benefits.module.css";
import common from "../common/common.module.scss";

export function Benefits() {
  return (
    <section className={s.benefits}>
      <div className={common.wrapper}>
        <h2 className={common.section_title}>I am considering the option of remote work</h2>
        <div className={s.btn_center}>
          <button className={s.btn}>Hire Me</button>
        </div>
      </div>
    </section>
  );
}
