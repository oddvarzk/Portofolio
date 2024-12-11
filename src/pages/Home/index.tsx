import workPicture from "../../assets/pictureMe.jpeg";
import viteSVG from "../../assets/viteIcon.svg";

export function Home() {
  return (
    <div className="mt-5 px-5 py-3">
      <div
        id="home"
        className="flex flex-col md:flex-row justify-center text-Cream gap-10 font-Montserrat items-center"
      >
        <div className="w-full md:w-1/2">
          <h2 className="text-lg py-2 font-light">
            Hi there! My name is Zakarias, welcome to my one and only portfolio
            website.
          </h2>
          <p className="font-light py-2">
            I'm a newly graduated Front-end Developer. With a solid interest
            tech, new technology and becoming a senior full-stack developer in
            the upcomming future.
          </p>
          <p className="font-light py-2">
            This website is for you, so that you can get to know me better and
            see the skills I have to offer through the wide range of projects
            I've created.
          </p>
          <div className="flex justify-center py-3">
            <p>This website is made with:</p>
            <div className="flex">
              <img src={viteSVG} alt="" />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-Burgundy text-white px-3 py-1 mt-5 hover:bg-opacity-50 transition">
              Go to my projects
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-auto md:h-96 object-cover rounded"
            src={workPicture}
            alt="Picture of me in the mountain"
          />
        </div>
      </div>
      {/* add more content here */}
    </div>
  );
}

export default Home;
