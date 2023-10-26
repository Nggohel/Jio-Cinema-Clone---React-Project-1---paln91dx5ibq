import React from "react";
import TvShowsCarousel from "../../Carousel/TvShowsCarousel";
import PotraitCarousel from "../../PotraitCarousel/PotraitCarousel";
function TvshowPage() {
  const arr = [{ category: "tv show", title: "Tv show", mode: "Potrait" }];
  return (
    <>
      <TvShowsCarousel />
      <PotraitCarousel category={arr[0].category} title={arr[0].title} />
    </>
  );
}
export default TvshowPage;
