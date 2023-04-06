import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            <FormattedMessage id="there" />
            <br />
            <FormattedMessage id="i" /> Abdumalik.
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            <FormattedMessage id="quote1" />
            <br />
            <FormattedMessage id="quote2" />
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./person1.png"
            alt=""
          />
        </motion.div>

        <a className={css.email} href="mailto:abdimalikismoilov95@gmail.com">
          abdimalikismoilov95@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">3</div>
            <div className="secondaryText">
              <div>
                <FormattedMessage id="year" />
              </div>
              <div>
                <FormattedMessage id="experience" />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>
              <FormattedMessage id="certify1" />
            </span>
            <span>
              <FormattedMessage id="certify2" />
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
