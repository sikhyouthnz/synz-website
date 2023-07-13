"use client"
import SimpleImageSlider from "react-simple-image-slider";

export default function Home() {

  return (
    <main className="">
      <About />
      <PastEvents />
      <Contact />
    </main>
  )
}

const ImageSlider = () => {
  const images = [
    { url: "slider-images/img1.jpeg" },
    { url: "slider-images/img2.jpeg" },
    { url: "slider-images/img3.jpeg" },
    { url: "slider-images/img4.jpeg" },
    { url: "slider-images/img5.jpeg" },
  ];

  return (
    <div className="rounded">
      <SimpleImageSlider
        width={'729px'}
        height={'486px'}
        images={images}
        showBullets={false}
        showNavs={true}
        autoPlay
        autoPlayDelay={5}
      />
    </div>
  )
}

const About = () => {
  return (
    <div className="bg-sky-100 flex justify-between items-center">
      <div className="flex flex-col pl-10">
        <div className="max-w-2xl text-xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <ImageSlider />
    </div>
  )
}

const PastEvents = () => {
  return (
    <div className="text-center h-[60vh] flex flex-col items-center justify-center">
      <div className="font-medium text-2xl pb-8">Past Events</div>
      <div className="max-w-2xl text-xl font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <div className="bg-sky-100 text-center h-[60vh] flex flex-col items-center justify-center">
      <div className="font-medium text-2xl pb-8">Contact</div>
      <div className="max-w-2xl text-xl font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  )
}