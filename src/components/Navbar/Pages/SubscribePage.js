import CarouselCard from "../../Carousel/Carousel";
import { ImagesUrl } from "../../../Data/ImagesUrl";

function SubscribePage() {
  return (
    <>
      <CarouselCard />
      <img src={ImagesUrl.SubscribePageJpg} style={{ marginTop: "-40px" }} />
    </>
  );
}
export default SubscribePage;
