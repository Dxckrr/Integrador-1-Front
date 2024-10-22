import React from "react";

interface Detail {
  labelLeft: string;
  valueLeft: string;
  labelRight: string;
  valueRight: string;
}

interface DetallesComponentProps {
  title: string;
  details: Detail[];
}

const DetallesComponent: React.FC<DetallesComponentProps> = ({
  title,
  details,
}) => {
  return (
    <div className="pt-12">
      <h2 className="font-semibold text-xl">{title}</h2>
      {details.map((detail, index) => (
        <div
          key={index}
          className={`grid grid-cols-2 gap-x-8 mt-10 py-8 pt-4 border-t ${
            index !== 0 ? "border-t pt-4 py-8" : ""
          }`}
        >
          <div>
            <p className="text-base font-semibold text-[#4F7594]">
              {detail.labelLeft}
            </p>
            <p className="text-base font-medium">{detail.valueLeft}</p>
          </div>
          <div>
            <p className="text-base font-semibold text-[#4F7594]">
              {detail.labelRight}
            </p>
            <p className="text-base font-medium">{detail.valueRight}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetallesComponent;
