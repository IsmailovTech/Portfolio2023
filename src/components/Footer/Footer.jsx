import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
const Footer = ({ locale }) => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by{" "}
            <a href="mailto:abdimalikismoilov95@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">
              {" "}
              {locale === "uz" ? "Ma'lumotlar" : "Information"}
            </span>
            <p>Navoi Islom Karimov street, Uzbekistan</p>
          </div>
          <ul className={css.menu}>
            <li>{locale === "uz" ? "Xizmatlar" : "Services"}</li>
            <li> {locale === "uz" ? "Ishlar" : "Works"}</li>
            <li> {locale === "uz" ? "Izohlar" : "Notes"}</li>
            <li>{locale === "uz" ? "Tajriba" : "Experience"}</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
