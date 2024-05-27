import Carousel, { ResponsiveType } from "react-multi-carousel";

import Card from "@/components/Card";
import useWindowDimensions from "@/hooks/useWindowDimensions";

// shows better with 2:3 images
const images = [
  "https://images.unsplash.com/photo-1712673363052-0d603997af16?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542976735-f64ecb935c2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713213915575-0c88efc9149e?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1706928600672-dc5263cd759b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713051496669-e8ca782ace1b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

function Gallery() {
  const { width } = useWindowDimensions()
  const containerSize = width >= 768 ? "100%" : width - (34)

  const styles: React.CSSProperties = {
    objectFit: "contain",
    display: "block",
    height: '100%',
    width: "auto",
    margin: 'auto',
  }

  return (
    <Card border className="overflow-hidden">
      <div className="flex justify-center">
        <div style={{ width: containerSize }}>
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            containerClass="carousel-container"
            removeArrowOnDeviceType={[]}
            dotListClass="!bottom-5 custom-dot-list-style"
          >
            {images.map((el, i) => (
              <img src={el} alt={`image-${i}`} key={i} style={styles} />
            ))}
          </Carousel>
        </div>
      </div>
    </Card>
  )
}

export default Gallery