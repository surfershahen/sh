import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

import { urlFor, client } from "../../client";

// const about = [
//   {
//     title: "Web Development",
//     description: "I am good web developer. ",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Frontend Development",
//     description: "I am good web developer. ",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Backend Development",
//     description: "I am good web developer. ",
//     imgUrl: images.about03,
//   },
//   {
//     title: " Day Trading",
//     description: "I am good web developer. ",
//     imgUrl: images.about04,
//   },
// ];

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then(data => setAbout(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That <span> Good Design </span> <br /> means
        <span> Good Business</span>
      </h2>
      <div className="app__profiles">
        {about.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt="img" />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <h2 className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(About, "app__about"),
  "About",

  "app__whitebg"
);
