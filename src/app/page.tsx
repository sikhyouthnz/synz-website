"use client"
import SimpleImageSlider from "react-simple-image-slider";
import { useWindowSize } from "./hooks/useWindowSize";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import Image from "next/image";

export default function Home() {

  return (
    <main className="">
      <ImageComponent />
      <About />
      <PastEvents />
      <Contact />
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
  return (
    <div className="flex justify-center items-center pt-10 gap-12 flex-col md:p-10 xl:flex-row">
      <div className="flex flex-col pl-10 gap-6">
        <div className="max-w-2xl text-6xl font-extrabold text-blue-500">
          Empower the future
        </div>
        <div className="max-w-2xl text-2xl font-medium text-gray-500">
          Supporting and encouraging Sikh youths
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
    <div className="text-center min-h-[60vh] py-10 px-5 md:p-0 flex flex-col items-center justify-center">
      <div className="font-medium text-2xl pb-8">Mission Statement</div>
      <div className="max-w-2xl text-xl font-light">
        SYNZ’s mission is to empower and provide a safe space for Sikh youths in New Zealand. We
        do so by fostering and strengthening the Sikh identity with an emphasis on the Sikh Guru’s
        teachings. We offer a safe space for youths to discuss and involve themselves in the community.
        Rather than shunning the youths, we try to empower them by actively engaging with them and putting
        their ideas and feedback into action. We are proud of the work we have done in supporting our youths
        in New Zealand to become positive participants in the wider community as well.
      </div>
    </div>
  )
}

const Contact = () => {
  const windowSize = useWindowSize()

  let imgSize = { width: 621, height: 414 }

  if (windowSize.width > 1024) {
    imgSize = { width: 621, height: 414 }
  }

  let iconSize = 20
  if (windowSize.width > 768) {
    iconSize = 30
  }

  return (
    <div className="bg-sky-100 text-center py-10 px-5 min-h-[60vh] flex flex-col lg:flex-row gap-10 items-center justify-center">
      {/* <div className="font-medium text-2xl pb-8">Contact</div> */}
      <Image src="/contactus.png" alt="contact us image" width={imgSize.width} height={imgSize.height} />
      <div className="flex flex-row lg:flex-col gap-10 justify-around">
        <div>
          <div className="font-medium text-lg md:text-2xl text-left">Follow us on socials</div>
          <div className="flex gap-3">
            <AiOutlineInstagram size={iconSize} />
            <AiOutlineFacebook size={iconSize} />
            <AiOutlineLinkedin size={iconSize} />
          </div>
        </div>
        <div>
          <div className="font-medium text-lg md:text-2xl text-left">Contact us</div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3"><AiOutlineMail size={iconSize} /> <a href="mailto:sikhyouthnz@gmail.com">sikhyouthnz@gmail.com</a></div>
            <AiOutlinePhone size={iconSize} />
          </div>
        </div>
      </div>
    </div>
  )
}