import CarouselCard from "../../Carousel/Carousel";
import HotRightNow from "../../HotRightNow/HotRightNow";
import JiocinemaFooter from "../../Footer/JiocinemaFooter";
import CardCarousel from "../../PotraitCarousel/CardCarousel";
import arr from "../../../Data/CategoryList";
function HomePage() {
  return (
    <>
      <CarouselCard />

      {arr?.map((item, index) => (
        <CardCarousel
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
