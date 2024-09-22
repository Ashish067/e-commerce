import { Carousel } from "flowbite-react";
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpg";
import { FcNext, FcPrevious } from "react-icons/fc";

const SimpleSlicer = () => {
  return (
    <div className="w-full h-56 sm:h-56 md:h-[70vh] xl:h-[80vh]">
      <Carousel
        slideInterval={5000}
        leftControl={<FcPrevious className="hidden md:block" />}
        rightControl={<FcNext className="hidden md:block" />}
      >
        <img src={banner1} alt="..." className="h-full w-full object-fill" />
        <img src={banner2} alt="..." className="h-full w-full object-fill" />
      </Carousel>
    </div>
  );
};

export default SimpleSlicer;
