import React from "react";
import common from "../common/common.module.scss";
import s from "./Footer.module.scss"
import {SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiTelegram, SiViber} from "react-icons/si";
import Fade from "react-reveal/Fade";


export const Footer = () => (
  <footer className={s.footer}>
    <div className={common.wrapper}>

      <h2 className={common.section_title}>My Contacts</h2>
      <Fade bottom>
        <div className={s.socials}>
          <a href="https://github.com/Vadzimka0" target="_blank" rel="noreferrer">
            <SiGithub/>
          </a>
          <a href="#!" target="_blank" rel="noreferrer">
            <SiLinkedin/>
          </a>
          <a href="https://www.instagram.com/vadzik_dzianisik/" target="_blank" rel="noreferrer">
            <SiInstagram/>
          </a>
          <a href="https://t.me/Vadzimka" target="_blank" rel="noreferrer">
            <SiTelegram/>
          </a>
          <a href="viber://add?number=375295846056" target="_blank" rel="noreferrer">
            <SiViber/>
          </a>
          <a href="https://www.facebook.com/wadik.nhl" target="_blank" rel="noreferrer">
            <SiFacebook/>
          </a>
        </div>
      </Fade>

      <div className={s.copyright}>© 2021</div>

    </div>
  </footer>);
