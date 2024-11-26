"use client";

import { TracingBeam } from "../ui/tracing-beam";
import p1 from "../../assets/Projects/p1.png";
import p3 from "../../assets/Journey/Thread-Talk/t3.png";
import p2 from "../../assets/Projects/p2.png";
import p4 from "../../assets/Projects/p3.png";

export function projects() {
  return (
    <div className="w-screen dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <TracingBeam className="px-10 md:px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <div className="flex flex-row items-center space-x-4 mb-4">
                <p className="text-xl">{item.title}</p>
                <a href={item.url} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-paperclip hover:text-blue-500"
                  >
                    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                  </svg>
                </a>
              </div>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <img
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover border border-gray-200 shadow-lg"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    title: "NEMSCAF",
    description: (
      <>
        <p>
          NEMSCAF (Node Express MongoDB) is a Command Line Interface (CLI) tool
          designed to scaffold Node.js, Express, and MongoDB projects
          efficiently. This tool allows developers to generate a boilerplate
          project with customizable features like authentication and data
          validation, ensuring a faster and standardized development process.
        </p>
        <br />

        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-gray-700">
              Quick Setup: Generate a fully functional project with just one
              command.
            </li>
            <li className="text-gray-700">
              Customizable Authentication: Choose between JWT (default) or
              PassportJS for user authentication.
            </li>
            <li className="text-gray-700">
              Validation Options: Integrate Joi for request data validation to
              sanitize and structure user input.
            </li>
            <li className="text-gray-700">
              Modular and Scalable Codebase: The boilerplate is designed with
              clean, modular, and scalable architecture.
            </li>
          </ul>
        </div>
      </>
    ),
    badge: "NPM PACKAGE: Node CommanderJs FileSystem(fs) Child_Process",
    image: p1,
    url: "https://www.npmjs.com/package/nemscaf",
  },
  {
    title: "Plan My Trip",
    description: (
      <>
        <p className="text-gray-600 mb-4">
          <strong>Plant My Trip</strong> is a React.js-based web application
          designed to assist users in planning journeys to unfamiliar
          destinations. It provides practical guidance for travelers facing
          challenges like limited knowledge of the area or finding
          accommodations.
        </p>
        <p className="text-gray-600 mb-4">
          The app collects user inputs, such as:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Travel destination</li>
          <li>Duration of stay</li>
          <li>Budget</li>
          <li>Number of travelers</li>
        </ul>
        <p className="text-gray-600 mb-4">
          Based on this information, it generates a tailored travel plan,
          including:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Hotel recommendations that fit the budget</li>
          <li>Day-by-day itineraries for the duration of the stay</li>
        </ul>
        <p className="text-gray-600">
          This app simplifies trip planning by offering personalized travel
          solutions.
        </p>
      </>
    ),
    badge:
      "ReactJs GoogglePlaceAPi GoogleOAuth GoogleGenerativeAI ShadcdnUI AcertinityUI",
    image: p2,
    url: "https://planmytrip-demo.netlify.app/",
  },
  {
    title: "Thread Talk",
    description: (
      <>
        <p>
          This social media application, developed using the MEAN stack MongoDB,
          Express.js, Angular, and Node.js and styled with Tailwind CSS, serves
          as a platform for users to post questions and receive relevant
          answers. The app fosters a collaborative environment where users can
          engage with one another by asking and answering queries, ultimately
          enhancing the knowledge-sharing experience.
        </p>
        <br />
        <p>
          Users can upvote or downvote answers, helping to highlight the most
          relevant responses. To ensure a secure environment, registration
          requires email confirmation, allowing users to receive notifications
          about updates and new answers to followed questions.
        </p>
        <br />
        <p>
          The app frontend utilizes Angular for a dynamic user experience, while
          Node.js and Express.js manage backend operations. MongoDB stores user
          data and content efficiently. Overall, this platform promotes
          knowledge sharing and community engagement.
        </p>
      </>
    ),
    badge: "MEAN: MongoDB ExpressJS AngularJS NodeJS",
    image: p3,
    url: "https://github.com/bharatraj1508/ThreadTalk",
  },
  {
    title: "ToDo Trek",
    description: (
      <>
        <p>
          ToDoTrek is a dynamic web application that empowers users to
          efficiently manage their tasks through a user-friendly interface. The
          platform allows users to create tasks, set due dates, and organize
          their to-do lists effectively, enhancing productivity and time
          management.
        </p>
        <br />
        <p>
          A key feature of ToDoTrek is its integration with Google account
          authentication, which provides users with a seamless sign-up and login
          experience. This integration ensures a secure environment while
          allowing users to access their accounts effortlessly across different
          devices.
        </p>
        <br />
        <p>
          The application is built using AngularJS for the frontend, providing a
          responsive and intuitive user interface, while Node.js and Express.js
          handle backend operations, ensuring efficient task management and data
          processing. MongoDB is utilized for data storage, enabling the
          application to handle user data and task information effectively.
        </p>
        <br />
        <p>
          Overall, ToDoTrek exemplifies the use of modern web development
          technologies and best practices, showcasing skills in AngularJS,
          Node.js, Express.js, MongoDB, and user authentication via the Google
          Developer Console.
        </p>
      </>
    ),
    badge: "MEAN: MongoDB ExpressJS AngularJS NodeJS Google SignIn",
    image: p4,
    url: "https://github.com/bharatraj1508/TodoTrek-frontend",
  },
];

export default projects;
