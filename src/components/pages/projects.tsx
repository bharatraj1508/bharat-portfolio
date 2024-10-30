"use client";

import { TracingBeam } from "../ui/tracing-beam";
import p1 from "../../assets/Journey/Thread-Talk/t3.png";
import p2 from "../../assets/Projects/p2.png";
import p3 from "../../assets/Projects/p3.png";

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
    image: p1,
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
    image: p2,
    url: "https://github.com/bharatraj1508/TodoTrek-frontend",
  },
  {
    title: "Building Management System",
    description: (
      <>
        <p>
          The Building Management System is a comprehensive web application
          designed to facilitate the efficient management of residential
          buildings. It allows property managers to create and manage accounts
          for residents, add new units, and organize building information in one
          centralized platform.
        </p>
        <br />
        <p>
          With this system, users can generate maintenance tickets, enabling
          residents to report issues and track their resolution status.
          Additionally, the application supports bookings for building
          amenities, such as gyms or event spaces, making it easy for residents
          to reserve facilities.
        </p>
        <br />
        <p>
          Built with Ruby on Rails, this system leverages Ruby and JavaScript
          with Stimulus for dynamic functionality. PostgreSQL serves as the
          database, ensuring robust data storage and retrieval for user
          information and building operations.
        </p>
        <br />
        <p>
          This project highlights skills in Ruby, Ruby on Rails, JavaScript, and
          PostgreSQL, showcasing expertise in building user-friendly,
          database-driven applications for property management.
        </p>
      </>
    ),
    badge: "Ruby on Rails Postgresql Stimulus",
    image: p3,
    url: "https://github.com/bharatraj1508/BMS_Ruby",
  },
];

export default projects;
