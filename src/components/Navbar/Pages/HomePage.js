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
    { category: "trailer", title: "Trailer", mode: "Landscape" },
    { category: " short film", title: "Short film", mode: "Potrait" },
    { category: "web series", title: "Web series", mode: "Landscape" },
    { category: "tv show", title: "Tv show", mode: "Potrait" },
    { category: "documentary", title: "Documentary", mode: "Landscape" },
    { category: "video song", title: "video song", mode: "Potrait" },
  ];
  return (
    <>
      <CarouselCard />
      <HotRightNow />
      {arr.map((item, index) => (
        <CardPortraitCarousel
          category={item.category}
          title={item.title}
          mode={item.mode}
        />
      ))}
      <JiocinemaFooter />
    </>
  );
}
export default HomePage;
