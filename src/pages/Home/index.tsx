export function Home() {
  return (
    <div className="mt-5">
      <div className="flex justify-center text-Cream gap-10">
        <div>
          <h1 className="font-Montserrat text-2xl">Welcome to my Portofolio</h1>
          <p className="font-Montserrat text-center">
            Generic Informational Text
          </p>
        </div>
        <div className="font-Montserrat">
          <p>Image</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-Cream text-black px-3 py-1 mt-5">
          See more projects
        </button>
      </div>
    </div>
  );
}

export default Home;
