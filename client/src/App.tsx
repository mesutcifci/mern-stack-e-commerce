import { Header } from "@components/Header";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import { register } from "swiper/element/bundle";
import { Footer } from "@components/Footer";
import List from "@pages/List";

register();

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/c/:category" element={<List />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
