import workPicture from "../../assets/pictureMe.jpeg";
import viteSVG from "../../assets/viteIcon.svg";
import holidazeHome from "../../assets/holidazeHome.png";
import tailwindIcon from "../../assets/tailwindIcon.svg";
import reactIcon from "../../assets/reactIcon.svg";
import typescriptIcon from "../../assets/typescriptIcon.svg";

export function Home() {
  return (
    <div className="mt-5 px-5 py-3">
      <div
        id="home"
        className="flex flex-col md:flex-row justify-center text-Cream gap-10 font-Montserrat items-center mb-10"
      >
        <div className="w-full md:w-1/2">
          <h2 className="text-lg py-2 font-light">
            Hi there! My name is Zakarias, welcome to my portfolio.
          </h2>
          <p className="font-light text-sm py-2">
            I'm a newly graduated Front-end Developer. With a solid interest
            tech, new technology and becoming a senior full-stack developer in
            the upcomming future.
          </p>
          <p className="font-light text-sm py-2">
            This website is for you, so that you can get to know me better and
            see the skills I have to offer through the wide range of projects
            I've created.
          </p>
          <div className="text-center py-4">
            <p className="mb-2">This website is made with:</p>
            <div className="flex justify-center h-8 gap-1">
              <img src={viteSVG} alt="Vite Logo" />
              <img src={tailwindIcon} alt="Tailwind Logo" />
              <img src={reactIcon} alt="React Logo" />
              <img src={typescriptIcon} alt="Typescript Logo" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button className="bg-Burgundy w-48 text-white px-5 py-2 mt-5 hover:bg-opacity-50 transition">
              Go to my projects
            </button>
            <button className="bg-Cream w-48 hover:text-white text-black font-md px-5 py-2 mt-5 hover:bg-opacity-50 transition">
              Contact Information
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 py-5">
          <img
            className="w-full h-72 md:h-96 object-cover rounded"
            src={workPicture}
            alt="Picture of me in the mountain"
          />
        </div>
      </div>
      {/* add more content here */}
      <h1 className="text-center text-Cream font-Montserrat text-2xl font-extralight py-5 mt-5">
        Recent projects I've made
      </h1>
      <div className="flex justify-center flex-wrap py-5 gap-5">
        <div className="px-3 mb-5">
          <div className="w-fit">
            <img
              className="w-72 h-36 object-fit md:w-96 md:h-52"
              src={holidazeHome}
            ></img>
          </div>
          <div className="text-Cream font-Montserrat">
            <h3 className="text-center">
              Holidaze{" "}
              <span className="text-gray-200 text-sm">(Booking Website)</span>
            </h3>
            <h3 className="text-center text-sm py-1">Coded with:</h3>
            <div className="flex justify-center h-8 gap-1">
              <img src={viteSVG} alt="Vite Icon"></img>
              <img src={tailwindIcon} alt="Tailwind Icon" />
              <img src={reactIcon} alt="React Logo" />
              <img src={typescriptIcon} alt="Typescript Logo" />
            </div>
          </div>
        </div>
        <div className="px-3 mb-5">
          <div className="w-fit">
            <img
              className="w-72 h-36 object-fit md:w-96 md:h-52"
              src={holidazeHome}
            ></img>
          </div>
          <div className="text-Cream font-Montserrat">
            <h3 className="text-center">
              Holidaze{" "}
              <span className="text-gray-200 text-sm">(Booking Website)</span>
            </h3>
            <h3 className="text-center text-sm py-1">Coded with:</h3>
            <div className="flex justify-center h-8 gap-1">
              <img src={viteSVG} alt="Vite Icon"></img>
              <img src={tailwindIcon} alt="Tailwind Icon" />
              <img src={reactIcon} alt="React Logo" />
              <img src={typescriptIcon} alt="Typescript Logo" />
            </div>
          </div>
        </div>
        <div className="px-3 mb-5">
          <div className="w-fit">
            <img
              className="w-72 h-36 object-fit md:w-96 md:h-52"
              src={holidazeHome}
            ></img>
          </div>
          <div className="text-Cream font-Montserrat">
            <h3 className="text-center">
              Holidaze{" "}
              <span className="text-gray-200 text-sm">(Booking Website)</span>
            </h3>
            <h3 className="text-center text-sm py-1">Coded with:</h3>
            <div className="flex justify-center h-8 gap-1">
              <img src={viteSVG} alt="Vite Icon"></img>
              <img src={tailwindIcon} alt="Tailwind Icon" />
              <img src={reactIcon} alt="React Logo" />
              <img src={typescriptIcon} alt="Typescript Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
