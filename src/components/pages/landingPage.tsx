import { TypewriterEffect } from "../ui/typewriter-effect";
import IntroPic from "../../assets/intro/heroImage.png";
import BgPic from "../../assets/intro/bg.png";

const landingPage = () => {
  const words = [
    {
      text: "Bharat",
    },
    {
      text: "Raj",
    },
    {
      text: "Verma",
    },
    {
      text: "Software",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Developer",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${BgPic})` }}
      >
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-white opacity-40"></div>

        <div className="relative z-10 flex flex-row items-center h-screen justify-between w-full">
          <div className="flex flex-col items-center w-[100rem]">
            <p className="text-neutral-600 dark:text-neutral-200 text-base mb-10">
              Crafting code with passion and purpose
            </p>
            <TypewriterEffect words={words} />
          </div>

          <div>
            <img
              src={IntroPic}
              alt="my profile"
              className="rounded-full mx-auto w-3/4 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default landingPage;
