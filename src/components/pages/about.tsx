import { ContainerScroll } from "../ui/container-scroll-animation";
import { FlipWords } from "../ui/flip-words";
import { Button } from "../ui/moving-border";
import AboutBG from "../../assets/aboutBG.png";

const about = () => {
  const words = [
    "AngularJS",
    "ReactJS",
    "Ruby on Rails",
    "NodeJS",
    "ExpressJS",
    "MongoDb",
    "Postgresql",
  ];
  return (
    <>
      <div className="w-screen dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl flex flex-col items-center font-semibold text-black dark:text-white">
                  <Button
                    borderRadius="1.75rem"
                    className="cursor-text font-bold p-4 border bg-white dark:bg-slate-900 text-xl md:text-3xl text-neutral-700 dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    I possess a diverse knowledge <br />
                    about different programming tools like: <br />
                  </Button>
                  <span className="text-4xl md:text-[6rem] font-bold mt-6 md:mt-1 leading-none">
                    <FlipWords words={words} className="font-bold" />
                  </span>
                </h1>
              </>
            }
          >
            <img
              src={AboutBG}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </div>
    </>
  );
};

export default about;
