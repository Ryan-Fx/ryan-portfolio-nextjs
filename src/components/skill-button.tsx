import { motion } from "framer-motion";
import React from "react";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100%)" },
};

interface Props {
  name: string;
  onClick: (name: string) => void;
  isSelected: any;
}

const SkillButton = ({ name, onClick, isSelected }: Props) => {
  const buttonStyles = isSelected ? "text-gray-600" : "text-gray-400";

  return (
    <button
      className={`${buttonStyles} text-base md:text-lg font-semibold lg:text-2xl xl:text-3xl cursor-pointer hover:text-gray-600 transition duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
      <motion.div
        animate={isSelected ? "active" : "default"}
        variants={variants}
        className="h-1 lg:h-2 bg-yellow-500 mt-1 rounded-full"
      ></motion.div>
    </button>
  );
};

export default SkillButton;
