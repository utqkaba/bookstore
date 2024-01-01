import { useState, useEffect } from 'react';
import { PiConfetti } from "react-icons/pi";

function PromoBar() {
  const [promoText, setPromoText] = useState("A YEAR FULL OF NEW BOOKS! DISCOVER SPEACIAL OFFERS FOR 2024.");
  const promoTexts = ["A YEAR FULL OF NEW BOOKS! DISCOVER SPEACIAL OFFERS FOR 2024.", "THIS WEEK ONLY! 10% DISCOUNT ON ONLINE PURCHASES", "$50 INSTANT DISCOUNT ON SHOPPING $350 AND OVER"];

  useEffect(() => {
    const interval = setInterval(() => {
      setPromoText((prevText) => {
        const currentIndex = promoTexts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % promoTexts.length;
        return promoTexts[nextIndex];
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="mx-auto overflow-hidden bg-gray-800 text-white p-2 mt-6 top-0 w-11/12 rounded-md">
      <div className="flex items-center justify-center">
        <PiConfetti size="1.5rem" className="mr-auto mx-6 animate-pulse" />
        <div className="text-center font-mono p-2">
          {promoText}
        </div>
        <PiConfetti size="1.5rem" className="ml-auto mx-6 animate-pulse" />
      </div>
    </div>
  );
}

export default PromoBar;
