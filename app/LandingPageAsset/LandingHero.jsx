import Image from "next/image";
import React from "react";
import dashboardSs from '../../public/dashboardSs.png'
import { Button } from "@/components/ui/button";

const LandingHero = () => {
  return (
    <section>
      <div className="max-w-screen min-h-screen mx-auto px-4 sm:px-6 relative overflow-x-hidden landingGradient text-black bg-repeat" style={{backgroundImage:"url(https://www.transparentpng.com/download/pattern/p3NBVZ-data-security-and-privacy-software-services-safe-data.png)"}}>
        {/* Illustration behind hero content */}
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4 " data-aos="fade-up">
             Create Simple Landing Pages in Minutes
            </h1>
            <p
              className="text-lg sm:text-xl  mb-8 "
              data-aos="fade-up"
              data-aos-delay="200"
            >
             Say Goodbye to Complicated Design Tools — Ease Lets You Craft Professional Landing Pages Quickly and Simply.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center flex gap-4 justify-center items-center">
               <div className="p-[2px] rounded-lg bg-animated-gradient">
               <Button className="bg-black hover:bg-zinc-950">Start free trial</Button>
               </div>
               <Button variant="secondary">Learn more</Button>
            </div>
          </div>
          <div className="w-full flex justify-center">
          <Image
            src={dashboardSs}
            width={1200}
            height={1200}
            className="rounded-lg"
          />
          </div>
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
