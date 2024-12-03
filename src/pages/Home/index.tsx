export function Home() {
  return (
    <div className="mt-5">
      <div className="flex justify-center text-Cream gap-10 font-Montserrat">
        <div>
          <h1 className="text-2xl">Hi!</h1>
          <h2 className="text-lg py-2">Welcome to my Portofolio</h2>
          <p className="w-1/2">
            I'm a newly graduated Front-end Developer, this site is made so you
            can get to know me better, but also see what skills i have to offer
            with the wide range of projects i have created.
          </p>
          <div className="flex">
            <button className="bg-Cream text-black px-3 py-1 mt-5">
              See more projects
            </button>
          </div>
        </div>
        <div className="font-Montserrat">
          <p>Image</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
