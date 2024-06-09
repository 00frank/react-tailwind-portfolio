import { useState } from "react";
import { useSwipeable } from "react-swipeable";

import Card from "@/components/Card";
import { CameraIcon, DotIcon } from "@/components/Icons";

import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";

const images = [
  img1,
  img2,
  img7,
  img3,
  img4,
  img5,
  img6,
]

function Carousel({ images }: { images: string[] }) {
  const [imageIndex, setImageIndex] = useState(0);
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setImageIndex(prev => prev + 1 > images.length - 1 ? 0 : prev + 1),
    onSwipedRight: () => setImageIndex(prev => prev - 1 < 0 ? images.length - 1 : prev - 1)
  })

  return (
    <section className="h-[296px] w-full relative">
      <div className="w-full h-full flex overflow-hidden" {...swipeHandlers}>
        {images.map((el, i) => (
          <img
            key={i}
            src={el}
            alt={`image-${i}`}
            className="carousel-image object-cover block h-full w-full flex-shrink-0 flex-grow-0"
            style={{ translate: `${-100 * imageIndex}%` }} />
        ))}
      </div>
      <div className="p-0.5 rounded-full backdrop-blur-sm absolute bottom-5 left-1/2 -translate-x-1/2">
        {images.map((_, i) => (
          <DotIcon
            className={`carousel-image-dot ${imageIndex === i ? "text-white text-xl" : "text-gray-500 text-lg hover:cursor-pointer"}`}
            onClick={() => setImageIndex(i)} key={i} />
        ))}
      </div>
    </section>
  )
}

function Gallery({ className }: { className: string }) {
  return (
    <Card border className={`${className} overflow-hidden relative`}>
      <Carousel images={images} />
      <div className="absolute right-0 bottom-0 p-4">
        <CameraIcon className="text-xl" />
      </div>
    </Card>
  )
}

export default Gallery