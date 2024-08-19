import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const DropDown = ({ label, options }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-600 transition-colors"
      >
        <span className="font-medium text-sm">
          {selected ? selected : label}
        </span>
        <motion.span
          animate={open ? { rotate: 180 } : { rotate: 0 }}
          className="ml-1"
        >
          <FiChevronDown />
        </motion.span>
      </button>

      {open && (
        <motion.ul
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-1 w-full bg-white shadow-lg rounded-md z-10"
        >
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-200"
            >
              {option}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default DropDown;

