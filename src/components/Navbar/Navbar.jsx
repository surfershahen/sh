import React, { useState } from "react";

import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    // BEM front-end naming method the Block ,Element Modifier EX:app__navbar
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.vue} alt="logo" />
      </div>
      {/* unordered list to loop through all of the elements we need to have in our navigation  */}
      <ul className="app__navbar-links">
        {["Home", "About", "Contact", "Work", "Skills"].map(item => (
          // create an instant return function
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}> {item} </a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["Home", "About", "Contact", "Work", "Skills"].map(item => (
                // create an instant return function
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
