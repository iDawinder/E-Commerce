import React, { useState, useEffect } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="tw-fixed tw-z-20 tw-bottom-3 tw-right-3 tw-bg-red-500 tw-text-white tw-border-none tw-px-4 tw-py-2 tw-rounded-full tw-cursor-pointer tw-transition tw-duration-300  sm:tw-bottom-8 sm:tw-right-2 lg:tw-bottom-16 lg:tw-right-8 scroll-to-top tw-font-bold"
      >
        <FaArrowTurnUp />
      </button>
    )
  );
};

export default ScrollToTop;
