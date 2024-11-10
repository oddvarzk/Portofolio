import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
