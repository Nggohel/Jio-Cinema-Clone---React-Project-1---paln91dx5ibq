import React from "react";
import NewsCarousel from "../../Carousel/NewsCarousel";
import PotraitCarousel from "../../PotraitCarousel/PotraitCarousel";

function NewsPage() {
  const arr = [
    { category: " short film", title: "Short film", mode: "Potrait" },
  ];
  return (
    <>
      <NewsCarousel />
      <PotraitCarousel category={arr[0].category} title={arr[0].title} />
    </>
  );
}
export default NewsPage;
