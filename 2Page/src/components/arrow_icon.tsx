import React from "react";
import ArrowIconss from "@/assets/icons/arrow.svg"

const ArrowIcon: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-2 z-[1] flex-none h-[60px] w-[60px] sm:bottom-20 sm:right-10">
      <a href="#logos" className="scroll-smooth">
        <img src={ArrowIconss} alt="Icons"/>
      </a>
    </div>
  );
};

export default ArrowIcon;
