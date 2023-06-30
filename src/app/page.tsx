"use client"
import SimpleImageSlider from "react-simple-image-slider";

export default function Home() {
  const images = [
    { url: "slider-images/img1.png" },
    { url: "slider-images/img2.png" },
    { url: "slider-images/img3.png" },
    { url: "slider-images/img4.png" },
    { url: "slider-images/img5.png" },
  ];

  return (
    <main className="">
      <div>
        <SimpleImageSlider
          width={window.innerWidth}
          height={580}
          images={images}
          showBullets={false}
          showNavs={true}
          autoPlay
          autoPlayDelay={5}
        />
      </div>
    </main>
  )
}
