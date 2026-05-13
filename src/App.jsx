import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import NotFound from "./components/NotFound/NotFound";
import NewsCard from "./components/NewsCard/NewsCard";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);

  function handleSearch(e) {
    e.preventDefault();
    setIsLoading(true);
    setIsNotFound(false);
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main onSearch={handleSearch} />} />
        <Route path="/saved-news" element={<h1>Saved News</h1>} />
      </Routes>
      {isLoading && <Preloader />}
      {isNotFound && <NotFound />}
      <About />
      <Footer />
    </div>
  );
}

export default App;
