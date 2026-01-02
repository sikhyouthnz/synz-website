"use client"
import SimpleImageSlider from "react-simple-image-slider";
import { useWindowSize } from "./hooks/useWindowSize";

export default function Home() {

  return (
    <main className="">
      <ImageComponent />
      <About />
      <PastEvents />
    </main>
  )
}

const ImageSlider = () => {
  const windowSize = useWindowSize()

  const images = [
    { url: "slider-images/img1.jpeg" },
    { url: "slider-images/img2.jpeg" },
    { url: "slider-images/img3.jpeg" },
    { url: "slider-images/img4.jpeg" },
    { url: "slider-images/img5.jpeg" },
  ];

  const sliderWidth = windowSize.width < 729 ? windowSize.width : 729
  let sliderSize = { width: sliderWidth + 'px', height: sliderWidth / 1.5 + 'px' };

  if (windowSize.width > 1280) {
    sliderSize = { width: '729px', height: '486px' }
  }

  return (
    <div className="rounded">
      <SimpleImageSlider
        width={sliderSize.width}
        height={sliderSize.height}
        images={images}
        showBullets={false}
        showNavs={true}
        autoPlay
        autoPlayDelay={5}
      />
    </div>
  )
}

const ImageComponent = () => {
  const handleMouseOver = (e:any) => {
    e.target.style.textDecoration = 'underline';
  };

  const handleMouseOut = (e:any) => {
    e.target.style.fontWeight = 'normal';
    e.target.style.textDecoration = 'none';
  };

  return (
    <div className="flex justify-center items-center pt-10 gap-12 flex-col md:p-10 xl:flex-row">
      <div className="flex flex-col pl-10 gap-6">
        <div className="max-w-2xl text-6xl font-extrabold text-blue-500">
          Empowering the future
        </div>
        <div className="max-w-2xl text-2xl font-medium text-gray-500">
          An inclusive national youth-led platform enriching and supporting the lives of Sikh youths of New Zealand
        </div>
        <div>
          Winter camp tickets out now! Register here:<span> </span>
          <a
            href="https://events.humanitix.com/synz-summer-camp-2026"
            style={{ color: 'blue', textDecoration: 'none', fontWeight: 'normal' }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >https://events.humanitix.com/synz-summer-camp-2026</a>
        </div>
      </div>
      <ImageSlider />
    </div>
  )
}

const About = () => {
  return (
    <div className="bg-sky-100 text-center py-10 px-5 md:p-0 min-h-[60vh] flex flex-col items-center justify-center">
      <div className="font-medium text-2xl pb-8">About</div>
      <div className="max-w-2xl text-xl font-light">
        Welcome! SYNZ is a registered charity organization dedicated to the empowerment of Sikh youths in New Zealand.
        Throughout its tenure, SYNZ has organized multiple social and religious events on an annual basis including two annual camps.
        As an organization dedicated to young Sikhs, SYNZ considers the well-being of Sikh youths in New Zealand as a core operational motivation.
        Beyond religious events, SYNZ has offered career guidance, mental health talks, investment, and vehicle safety courses.
        SYNZ has proven itself to be a trusted and multicultural organization with members from different ethnic backgrounds truly testifying
        to the Guru’s message of the unity of humanity.
      </div>
    </div>
  )
}

const PastEvents = () => {
  return (
    <div className="text-left min-h-[60vh] py-10 px-5 md:p-0 flex flex-col items-center justify-center">
      <div className="font-medium text-2xl pb-8">Mission Statement</div>
      <div className="max-w-2xl text-xl font-light">
        <ul className="list-disc">
          <li>Providing a support network that cultivates an awareness and interest in  the culture, identity, faith, and community of Sikh youths.</li>
          <li>Align our programs, operations and management with the principles of Sikhi.</li>
          <li>Collaborate and support other organisations that share the values of Sikh Youth New Zealand.</li>
          <li>Innovating modern and practical approaches to engage Sikh youths.</li>
        </ul>
      </div>
    </div>
  )
}