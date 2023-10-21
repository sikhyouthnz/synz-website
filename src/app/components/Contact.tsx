'use client'

import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { useWindowSize } from "../hooks/useWindowSize"
import Image from "next/image";

export default function Contact() {
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
        <div id="contact" className="bg-sky-100 text-center py-10 px-5 min-h-[60vh] flex flex-col lg:flex-row gap-10 items-center justify-center">
            {/* <div className="font-medium text-2xl pb-8">Contact</div> */}
            <Image src="/contactus.png" alt="contact us image" width={imgSize.width} height={imgSize.height} />
            <div className="flex flex-row lg:flex-col gap-10 justify-around">
                <div>
                    <div className="font-medium text-base md:text-2xl text-left">Follow us on socials</div>
                    <div className="flex gap-3">
                        <a href="https://www.instagram.com/sikhyouthnz/"> <AiOutlineInstagram size={iconSize} /> </a>
                        <a href="https://www.facebook.com/sikhyouthnz/"> <AiOutlineFacebook size={iconSize}/> </a>
                        <a href="https://www.linkedin.com/company/sikh-youth-nz-cc54981/"> <AiOutlineLinkedin size={iconSize} /> </a>
                    </div>
                </div>
                <div>
                    <div className="font-medium text-base md:text-2xl text-left">Contact us</div>
                    <div className="flex flex-col gap-3">
                        <div className="text-sm md:text-base flex items-center gap-3"><AiOutlineMail size={iconSize} /> <a href="mailto:sikhyouthnz@gmail.com">sikhyouthnz@gmail.com</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}