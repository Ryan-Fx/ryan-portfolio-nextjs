import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

export default function TabButton({ active, selectTab, children }: any) {
  const buttonClasses = active ? "text-white" : "text-gray-400 ";

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold transition duration-300 hover:text-white ${buttonClasses}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-yellow-500 mt-1 rounded-full"
      ></motion.div>
    </button>
  );
}
