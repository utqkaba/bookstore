import { useState, useEffect } from 'react';

function PromoBar() {
  const [promoText, setPromoText] = useState("FREE SHIPPING OVER $100"); // Başlangıç metni
  const promoTexts = ["FREE SHIPPING OVER $100", "BEST SELLER BOOKS", "$50 INSTANT DISCOUNT ON SHOPPING $250 AND OVER"]; // Değişen metinler

  useEffect(() => {
    const interval = setInterval(() => {
      setPromoText((prevText) => {
        const currentIndex = promoTexts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % promoTexts.length;
        return promoTexts[nextIndex];
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  },);

  return (
    <div className="mx-auto bg-gray-800 text-white p-2 mt-6 top-0 w-11/12 rounded-md">
      <div className="text-center font- mx-auto p-2">
        {promoText}
      </div>
    </div>
  );
}

export default PromoBar;