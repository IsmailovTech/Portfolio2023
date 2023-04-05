import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import { FormattedMessage } from "react-intl";

const Header = ({ handleLocaleChange }) => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>Abdumalik</div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li>
            <a href="#experties">
              <FormattedMessage id="service" />
            </a>
          </li>
          <li>
            <a href="#work">
              <FormattedMessage id="experience" />
            </a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#people">
              {" "}
              <FormattedMessage id="testimonials" />
            </a>
          </li>
          <button onClick={handleLocaleChange}>
            <FormattedMessage id="language" />
          </button>
          <li className={`flexCenter ${css.phone}`}>
            <a href="tel:+998880852199">+99888 085 21 99</a>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
