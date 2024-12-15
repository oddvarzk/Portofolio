import { Element, Link as ScrollLink } from "react-scroll";

import workPicture from "../../assets/pictureMe.jpeg";
import viteSVG from "../../assets/viteIcon.svg";
import holidazeHome from "../../assets/holidazeHome.png";
import frameworksHome from "../../assets/frameworksHome.png";
import semesterHome from "../../assets/semesterHome.png";
import tailwindIcon from "../../assets/tailwindIcon.svg";
import reactIcon from "../../assets/reactIcon.svg";
import typescriptIcon from "../../assets/typescriptIcon.svg";
import javascriptIcon from "../../assets/javascriptIcon.svg";
import htmlIcon from "../../assets/htmlIcon.svg";

export function Home() {
  return (
    <div className="mt-5 px-5 py-8 md:py-12">
      {/* Home Section */}
      <Element name="home" id="home">
        <div className="flex flex-col md:flex-row justify-center text-Cream gap-10 font-Montserrat items-center mb-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-lg py-2 font-light">
              Hi there! My name is Zakarias, welcome to my portfolio.
            </h2>
            <p className="font-light text-sm py-2">
              I'm a newly graduated Front-end Developer. With a solid interest
              in tech, new technology, and becoming a senior full-stack
              developer in the upcoming future.
            </p>
            <p className="font-light text-sm py-2">
              This website is for you, so that you can get to know me better and
              see the skills I have to offer through the wide range of projects
              I've created.
            </p>

            <div className="text-center py-6">
              <p className="mb-2">This website is made with:</p>
              <div className="flex justify-center h-8 gap-2">
                <img src={viteSVG} alt="Vite Logo" className="h-full" />
                <img
                  src={tailwindIcon}
                  alt="Tailwind Icon"
                  className="h-full"
                />
                <img src={reactIcon} alt="React Logo" className="h-full" />
                <img
                  src={typescriptIcon}
                  alt="Typescript Logo"
                  className="h-full"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center space-y-4">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer w-full"
              >
                <button className="bg-Burgundy w-full text-white px-5 py-2 hover:bg-opacity-50 transition">
                  Go to my projects
                </button>
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer w-full"
              >
                <button className="bg-Cream w-full hover:text-white text-black font-md px-5 py-2 hover:bg-opacity-50 transition">
                  Contact Information
                </button>
              </ScrollLink>
            </div>
          </div>
          <div className="w-full md:w-1/2 py-5">
            <img
              className="w-full h-72 md:h-96 object-cover shadow-lg"
              src={workPicture}
              alt="Picture of me in the mountain"
            />
          </div>
        </div>
      </Element>

      {/* Recent Projects Section */}
      <h1 className="text-center text-Cream font-Montserrat text-2xl font-extralight py-8">
        Recent Projects I've Made
      </h1>
      <Element name="projects" id="projects">
        <div className="flex justify-center flex-wrap py-8 gap-8">
          {/* Project 1: Holidaze */}
          <div className="px-3 mb-5 w-full sm:w-11/12 md:w-5/12 lg:w-4/12">
            <div className="w-full">
              <img
                className="w-full h-48 md:h-64 object-cover shadow-md"
                src={holidazeHome}
                alt="Holidaze Screenshot"
              />
            </div>
            <div className="text-Cream font-Montserrat mt-4">
              <h3 className="text-center text-lg font-semibold">
                Holidaze{" "}
                <span className="text-gray-300 text-sm">(Booking Website)</span>
              </h3>
              <div className="flex justify-between py-3">
                <a
                  href="https://ozkholidaze.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2"
                >
                  <button className="bg-Burgundy w-full text-white px-3 py-2 hover:bg-opacity-75 transition">
                    Live Website
                  </button>
                </a>
                <a
                  href="https://github.com/oddvarzk/Holidaze"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2"
                >
                  <button className="bg-Cream w-full text-black px-3 py-2 hover:bg-opacity-75 transition">
                    Github Repo
                  </button>
                </a>
              </div>
              <h4 className="text-center text-sm mt-3">Coded with:</h4>
              <div className="flex justify-center h-8 gap-2 mt-1">
                <img src={viteSVG} alt="Vite Icon" className="h-full" />
                <img
                  src={tailwindIcon}
                  alt="Tailwind Icon"
                  className="h-full"
                />
                <img src={reactIcon} alt="React Logo" className="h-full" />
                <img
                  src={typescriptIcon}
                  alt="Typescript Logo"
                  className="h-full"
                />
              </div>
            </div>
          </div>

          {/* Project 2: Variety Vault */}
          <div className="px-3 mb-5 w-full sm:w-11/12 md:w-5/12 lg:w-4/12">
            <div className="w-full">
              <img
                className="w-full h-48 md:h-64 object-cover shadow-md"
                src={frameworksHome}
                alt="Variety Vault Screenshot"
              />
            </div>
            <div className="text-Cream font-Montserrat mt-4">
              <h3 className="text-center text-lg font-semibold">
                Variety Vault{" "}
                <span className="text-gray-300 text-sm">
                  (E-Commerce Website)
                </span>
              </h3>
              <div className="flex justify-between py-3">
                <a
                  href="https://varietyvault.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2"
                >
                  <button className="bg-Burgundy w-full text-white px-3 py-2 hover:bg-opacity-75 transition">
                    Live Website
                  </button>
                </a>
                <a
                  href="https://github.com/oddvarzk/frameWorksCA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2"
                >
                  <button className="bg-Cream w-full text-black px-3 py-2 hover:bg-opacity-75 transition">
                    Github Repo
                  </button>
                </a>
              </div>
              <h4 className="text-center text-sm mt-3">Coded with:</h4>
              <div className="flex justify-center h-8 gap-2 mt-1">
                <img src={viteSVG} alt="Vite Icon" className="h-full" />
                <img
                  src={tailwindIcon}
                  alt="Tailwind Icon"
                  className="h-full"
                />
                <img src={reactIcon} alt="React Logo" className="h-full" />
                <img
                  src={javascriptIcon}
                  alt="Javascript Logo"
                  className="h-full"
                />
              </div>
            </div>
          </div>

          {/* Project 3: The Collectibles Auction */}
          <div className="px-3 mb-5 w-full sm:w-11/12 md:w-5/12 lg:w-4/12">
            <div className="w-full">
              <img
                className="w-full h-48 md:h-64 object-cover shadow-md"
                src={semesterHome}
                alt="The Collectibles Auction Screenshot"
              />
            </div>
            <div className="text-Cream font-Montserrat mt-4">
              <h3 className="text-center text-lg font-semibold">
                The Collectibles Auction{" "}
                <span className="text-gray-300 text-sm">(Auction Website)</span>
              </h3>
              <div className="flex justify-between py-3">
                <a
                  href="https://thecollectiblesauction.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2"
                >
                  <button className="bg-Burgundy w-full text-white px-3 py-2 hover:bg-opacity-75 transition">
                    Live Website
                  </button>
                </a>
                <a
                  href="https://github.com/oddvarzk/SemesterProject2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2"
                >
                  <button className="bg-Cream w-full text-black px-3 py-2 hover:bg-opacity-75 transition">
                    Github Repo
                  </button>
                </a>
              </div>
              <h4 className="text-center text-sm mt-3">Coded with:</h4>
              <div className="flex justify-center h-8 gap-2 mt-1">
                <img
                  src={tailwindIcon}
                  alt="Tailwind Icon"
                  className="h-full"
                />
                <img
                  src={javascriptIcon}
                  alt="Javascript Logo"
                  className="h-full"
                />
                <img src={htmlIcon} alt="HTML Logo" className="h-full" />
              </div>
            </div>
          </div>
        </div>
      </Element>

      {/* About Me Section */}
      <h1 className="text-center text-Cream font-Montserrat text-2xl font-extralight py-8">
        About Me
      </h1>
      <Element name="about" id="about">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <p className="text-Cream font-Montserrat text-lg leading-relaxed mb-4">
            Hi again, I'm Zakarias, a 25-year-old web developer based in Oslo. I
            enjoy spending my free time in nature, whether it's hiking in the
            nearby forests or simply taking a walk by the fjords.
          </p>
          <p className="text-Cream font-Montserrat text-lg leading-relaxed mb-4">
            Professionally, I focus on building dynamic and responsive web
            applications. I have a solid foundation in HTML, CSS, and
            JavaScript, and I work primarily with React and TypeScript. I also
            design prototypes using Figma, which helps me plan and visualize
            projects before development.
          </p>
          <p className="text-Cream font-Montserrat text-lg leading-relaxed mb-4">
            I value collaboration and enjoy working with different teams to
            solve challenges and improve user experiences. I'm comfortable using
            Git for version control and have experience integrating APIs to add
            functionality to my projects. Additionally, I use tools like
            Tailwind, Bootstrap, Sass, and Vite to streamline my workflow.
          </p>
          <p className="text-Cream font-Montserrat text-lg leading-relaxed mb-4">
            Looking ahead, I aim to grow into a full-stack developer. I'm keen
            to learn new programming languages and stay updated with industry
            trends to continue improving my skills.
          </p>
          <p className="text-Cream font-Montserrat text-lg leading-relaxed">
            When I'm not coding or designing, I like connecting with others and
            exploring the outdoors. I'm dedicated to my work and always open to
            new opportunities and collaborations. Feel free to reach out if
            you'd like to connect!
          </p>
        </div>
      </Element>

      {/* Contact Section */}
      <Element name="contact" id="contact">
        <div className="py-8">
          <h2 className="text-center text-Cream font-Montserrat text-xl font-light">
            Get in Touch
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center mt-6 gap-4">
            <a
              href="mailto:your.email@example.com"
              className="mx-2 w-full sm:w-auto"
            >
              <button className="bg-Burgundy w-full sm:w-48 text-white px-5 py-2 hover:bg-opacity-50 transition">
                Email Me
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/oddvar-zakarias-kristiansen-22b583262/"
              className="mx-2 w-full sm:w-auto"
            >
              <button className="bg-Cream w-full sm:w-48 hover:text-white text-black font-md px-5 py-2 hover:bg-opacity-50 transition">
                LinkedIn
              </button>
            </a>
          </div>
        </div>
      </Element>
    </div>
  );
}

export default Home;
