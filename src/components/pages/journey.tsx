import { Timeline } from "../ui/timeline";
import t1 from "../../assets/Journey/Thread-Talk/t1.png";
import t2 from "../../assets/Journey/Thread-Talk/t2.png";
import t3 from "../../assets/Journey/Thread-Talk/t3.png";
import t4 from "../../assets/Journey/Thread-Talk/t4.png";

import g1 from "../../assets/Journey/Guhuza/g1.png";
import g2 from "../../assets/Journey/Guhuza/g2.png";
import g3 from "../../assets/Journey/Guhuza/g3.png";
import g4 from "../../assets/Journey/Guhuza/g4.png";

import h1 from "../../assets/Journey/Humber/h1.png";
import h2 from "../../assets/Journey/Humber/h2.png";
import h3 from "../../assets/Journey/Humber/h3.png";
import h4 from "../../assets/Journey/Humber/h4.png";

const journey = () => {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started a new project of a social media web app, named, Thread Talk,
            and currently building and improving.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={t1}
              alt="Thread Talk"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={t2}
              alt="Thread Talk"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={t3}
              alt="Thread Talk"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={t4}
              alt="Thread Talk"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Joined an innovative project, Guhuza as a part of my capstone
            project.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            During my time at Guhuza. I built the front end in Swift UI and and
            handled the response of the api change. Also responsible for
            migrating the api end to a newer version
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={g1}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={g2}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={g3}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={g4}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Moved to Canada for pursuing higher studies in Information
            Technology Solutions at Humber College, Toronto.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            During my time at Humber, I have learnt many new technologies like
            AngularJS, ReactJS, Tailwind CSS, Machine Learning, Data Anlasys,
            Androind and iOS
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={h1}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={h2}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={h3}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={h4}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "May, 2020",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I have completed my BE CSE from Chandigarh Univeristy. I was able to
            learn about software devlopment, Operating System Architecture,
            Information Security and manuy more.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal list-disc pl-5 space-y-2 ">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                Completed my Bachelor's degree in Computer Science and
                Engineering.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                Joined Open Access Technology India as Junior Developer
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                Left my role as a Junior Developer for pursuing higher studies.
              </li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      title: "Jan, 2020",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Joined organization Open Access Technology India as an intern
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            During my time at OATI, I was responsible for various tasks like:
          </p>
          <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal list-disc pl-5 space-y-2 ">
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">•</span>
              Troubleshoot and resolve ongoing issues within products, ensuring
              optimal functionality and performance.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">•</span>
              Utilize HTML, CSS, and JavaScript to design visually appealing and
              user-friendly front-end interfaces.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">•</span>
              Conduct comprehensive testing, including Unit Testing and
              Regression Testing, to identify and rectify errors, enhancing
              overall product quality.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2014 - 2016",
      content: (
        <div>
          <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal list-disc pl-5 space-y-2 ">
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">•</span>
              Enrolled in Chandigarh University to pursure Bachelor's of
              Computer Science and Engineering.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">•</span>
              Completed my Secondary education in 2016.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">•</span>
              Started Secondary Education.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">•</span>
              Completed Higher Education in 2014
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="w-screen dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="w-full">
          <Timeline data={data} />
        </div>
      </div>
    </>
  );
};

export default journey;
