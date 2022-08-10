import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Base = ({ addBase, pizza }) => {
  const containerAnimate = {
    initial: { x: "100vw", opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", delay: 0.5 },
    },
  };
  const nextAnimate = {
    initial: { x: "-100vw" },
    animate: { x: 0, transition: { type: "spring", stiffness: "120" } },
  };
  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={containerAnimate}
      initial="initial"
      animate="animate"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{
                originX: 0,
                scale: 1.3,
                color: "#f8e102",
              }}
              transition={{
                type: "spring",
                stiffness: "300",
              }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          variants={nextAnimate}
          initial="initial"
          animate="animate"
          className="next"
        >
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
