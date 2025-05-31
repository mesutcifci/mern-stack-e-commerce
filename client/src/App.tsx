import { Header } from "@components/Header";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import { register } from "swiper/element/bundle";
import { Footer } from "@components/Footer";

register();

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
