import React from "react";
import SpotsCarousel from "../../Carousel/SpotsCarousel";
import PotraitCarousel from "../../PotraitCarousel/PotraitCarousel";

function SportPage() {
  const arr = [
    { category: " short film", title: "Short film", mode: "Potrait" },
  ];
  return (
    <>
      <SpotsCarousel />
      <PotraitCarousel category={arr[0].category} title={arr[0].title} />
    </>
  );
}
export default SportPage;
