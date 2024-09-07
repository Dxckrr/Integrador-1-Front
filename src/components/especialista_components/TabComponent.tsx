import React from "react";

interface TabComponentProps {
  options: string[];
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const TabComponent: React.FC<TabComponentProps> = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div className="flex space-x-6 pt-12 border-b border-[#D1DBE5] font-medium">
      {options.map((option) => (
        <button
          key={option}
          className={`text-[#4F7594] py-1 border-b-4 ${
            selectedOption === option
              ? "border-[#4F7594] text-black"
              : "border-[#E5E8EB]"
          }`}
          onClick={() => setSelectedOption(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default TabComponent;
