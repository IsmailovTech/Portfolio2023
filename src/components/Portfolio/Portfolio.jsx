import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
const Portfolio = ({ locale }) => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">
              {" "}
              {locale === "uz"
                ? "Mening so'ngi ishlarim"
                : "My latest projects"}
            </span>
            <p style={{ marginTop: "10px" }}>
              {locale === "uz"
                ? "Raqamli tajriba uchun mukammal yechim"
                : "Perfect solution for digital experience"}
            </p>
          </div>
          <a href="https://t.me/isabdimalik">
            <span className="secondaryText">
              {locale === "uz" ? "Ko'proq ishlarimni ko'rish" : "More projects"}
            </span>
          </a>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="./tong.jpg"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./TURIZM.jpg"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="./sugurta.jpg"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="./vizitka.jpg"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="./fl.jpg"
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./redeye.jpg"
            alt="project"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
