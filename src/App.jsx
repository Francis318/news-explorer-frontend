import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import NotFound from "./components/NotFound/NotFound";
import NewsCardList from "./components/NewsCardList/NewsCardList";
import PopupWithForm from "./components/PopupWithForm/PopupWithForm";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import InfoTooltip from "./components/InfoTooltip/InfoTooltip";
import SavedNewsHeader from "./components/SavedNewsHeader/SavedNewsHeader";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({ name: "Elise" });
  const [savedNews, setSavedNews] = React.useState([]);
  const [isSavedNews, setIsSavedNews] = React.useState(false);

  function handleSearch(e) {
    e.preventDefault();
    setIsLoading(true);
    setIsNotFound(false);

    setTimeout(() => {
      setIsLoading(false);

      const mockNews = [
        {
          title: "El renacimiento de la exploración espacial",
          description:
            "Nuevos cohetes prometen viajes más baratos a la órbita terrestre.",
          imageUrl:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop",
          author: "Agencia Espacial",
          date: "13 de mayo de 2026",
        },
        {
          title: "Avances en Inteligencia Artificial",
          description:
            "Modelos de lenguaje logran nuevas metas en comprensión lectora.",
          imageUrl:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&auto=format&fit=crop",
          author: "Tech News",
          date: "12 de mayo de 2026",
        },
        {
          title: "Descubren nueva especie marina",
          description:
            "Biólogos encuentran un pez bioluminiscente en las profundidades del océano.",
          imageUrl:
            "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=400&auto=format&fit=crop",
          author: "National Sci",
          date: "11 de mayo de 2026",
        },
        {
          title: "El futuro de las energías renovables",
          description:
            "Nuevos paneles solares duplican su eficiencia en zonas áridas.",
          imageUrl:
            "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=400&auto=format&fit=crop",
          author: "Eco Mundo",
          date: "10 de mayo de 2026",
        },
      ];

      setCards(mockNews);
    }, 2000);
  }

  function handleLoginClick() {
    setIsLoginPopupOpen(true);
    setIsInfoTooltipOpen(false);
    if (isRegisterPopupOpen) {
      setIsRegisterPopupOpen(false);
    }
  }

  function handleRegisterClick() {
    setIsRegisterPopupOpen(true);
    if (isLoginPopupOpen) {
      setIsLoginPopupOpen(false);
    }
  }

  function handleLoginSubmit() {
    setIsLoggedIn(true);
    setIsLoginPopupOpen(false);
  }

  return (
    <div>
      <Header
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main onSearch={handleSearch} />
              {isLoading && <Preloader />}
              {isNotFound && <NotFound />}
              {cards.length > 0 && <NewsCardList cards={cards} />}
              <About />
            </>
          }
        />

        <Route
          path="/saved-news"
          element={
            <SavedNewsHeader
              currentUser={currentUser}
              savedArticles={savedNews}
            />
          }
        />
      </Routes>
      <Footer />
      <Login
        isOpen={isLoginPopupOpen}
        onClose={() => setIsLoginPopupOpen(false)}
        onRedirectClick={handleRegisterClick}
        onLogin={handleLoginSubmit}
      />
      <Register
        isOpen={isRegisterPopupOpen}
        onClose={() => setIsRegisterPopupOpen(false)}
        onRedirectClick={handleLoginClick}
      />
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={() => setIsInfoTooltipOpen(false)}
        onLoginClick={handleLoginClick}
      />
    </div>
  );
}

export default App;
