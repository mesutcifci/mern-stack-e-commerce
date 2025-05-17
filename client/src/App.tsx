import { Navigation } from "@components/Navigation";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
