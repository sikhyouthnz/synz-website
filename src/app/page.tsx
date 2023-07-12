"use client"
import SimpleImageSlider from "react-simple-image-slider";

export default function Home() {

  return (
    <main className="">
      <ImageSlider />
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
    <SimpleImageSlider
      width={'972px'}
      height={'648px'}
      images={images}
      showBullets={false}
      showNavs={true}
      autoPlay
      autoPlayDelay={5}
    />
  )
}

const About = () => {
  return (
    <div className="bg-sky-100 text-center h-[60vh] flex flex-col items-center justify-center">
      <div className="font-medium text-2xl pb-8">About</div>
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