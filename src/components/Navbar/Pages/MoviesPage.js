import React from "react";
import MovieCarousel from "../../Carousel/MovieCarousel";
import PotraitCarousel from "../../PotraitCarousel/PotraitCarousel";

function MoviesPage() {
  const arr = [{ category: "movie", title: "Movie", mode: "Potrait" }];
  return (
    <>
      <MovieCarousel />
      <PotraitCarousel category={arr[0].category} title={arr[0].title} />
    </>
  );
}
export default MoviesPage;
