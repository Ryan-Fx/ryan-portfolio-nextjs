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
  const buttonStyles = isSelected ? "text-rose-600" : "text-rose-400";

  return (
    <button
      className={`${buttonStyles} text-base md:text-lg text-rose-400 font-semibold cursor-pointer hover:text-rose-600 transition duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
      <motion.div
        animate={isSelected ? "active" : "default"}
        variants={variants}
        className="h-1 lg:h-[6px] bg-purple-500 mt-1 rounded-full"
      ></motion.div>
    </button>
  );
};

export default SkillButton;
