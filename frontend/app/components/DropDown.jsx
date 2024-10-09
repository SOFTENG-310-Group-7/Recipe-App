import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

/**
 *
 * Dropdown Component
 *
 * This component renders a dropdown menu with a label and options.
 *
 * @Component
 *
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the dropdown.
 * @param {Array<string>} props.options - The options to be displayed in the dropdown.
 * @param {Function} props.onSelect - The function to be called when an option is selected.
 *
 * @returns {JSX.Element} A dropdown component with a label and options.
 */
const DropDown = ({ label, options, onSelect }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  const handleKeyDown = (event, option) => {
    if (event.key === "Enter" || event.key === " ") {
      handleSelect(option);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
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
          onMouseLeave={() => setOpen(false)}
        >
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(option)}
              onKeyDown={(e) => handleKeyDown(e, option)}
              tabIndex="0"
              className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-200"
              role="option"
              aria-selected={selected === option}
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
