import { useState } from "react";
import { useSwipeable } from "react-swipeable";

import Card from "@/components/Card";
import { CameraIcon, DotIcon } from "@/components/Icons";

const images = [
  "https://images.unsplash.com/photo-1716595792584-9546ff238176?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1712673363052-0d603997af16?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542976735-f64ecb935c2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713213915575-0c88efc9149e?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1706928600672-dc5263cd759b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713051496669-e8ca782ace1b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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