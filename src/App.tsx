import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout";
import Home from "./pages/Home";
// import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
