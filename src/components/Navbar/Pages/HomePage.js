import CarouselCard from "../../Carousel/Carousel";
import HotRightNow from "../../HotRightNow/HotRightNow";
import PotraitCarousel from "../../PotraitCarousel/PotraitCarousel";
import LandscapCarousel from "../../LandscapCarousel/LandscapCarousel";
import JiocinemaFooter from "../../Footer/JiocinemaFooter";
import TvShowPotraitCarousel from "../../PotraitCarousel/TvShowPotraitCarousel";
import ShortFilmPotraitCarousel from "../../PotraitCarousel/ShortFilmPotraitCarousel";
import VideoSongPotraitCarousel from "../../PotraitCarousel/VideoSongPotraitCarousel";
import TrailerLandscapCarousel from "../../LandscapCarousel/TrailerLandscapCarousel";
import WebSeriesLandscapCarousel from "../../LandscapCarousel/WebSeriesLandscapCarousel";
import CardPortraitCarousel from "../../PotraitCarousel/CardPortraitCarousel";

function HomePage() {
  const arr = [
    { category: "movie", title: "Movie", mode: "Potrait" },
    { category: "trailer", title: "Trailer", mode: "Potrait" },
    { category: "documentary", title: "Documentary", mode: "Landscape" },
  ];
  return (
    <>
      <CarouselCard />
      {/* <HotRightNow />
      <TrailerLandscapCarousel />
      <PotraitCarousel />
      <TvShowPotraitCarousel />
      <WebSeriesLandscapCarousel />
      <VideoSongPotraitCarousel />
      <ShortFilmPotraitCarousel />
      <LandscapCarousel />
      <PotraitCarousel />
      <JiocinemaFooter /> */}

      {arr.map((item, index) => (
        <CardPortraitCarousel
          category={item.category}
          title={item.title}
          mode={item.mode}
        />
      ))}
    </>
  );
}
export default HomePage;

// five routes all nav ke
// > ka route
// on click of card detail page bane ka
//react.portal
