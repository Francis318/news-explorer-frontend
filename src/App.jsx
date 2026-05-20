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
import SavedNews from "./components/SavedNews/SavedNews";
import newsApi from "./utils/NewsApi";
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
  const [isSavedNews, setIsSavedNews] = React.useState(false);
  const [apiError, setApiError] = React.useState(false);

  const [savedNews, setSavedNews] = React.useState([
    {
      _id: "1",
      keyword: "Naturaleza",
      title: "Descubren nueva especie marina",
      description:
        "Biólogos encuentran un pez bioluminiscente en las profundidades del océano.",
      date: "11 de mayo de 2026",
      source: "National Sci",
      url: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=400&auto=format&fit=crop",
    },
    {
      _id: "2",
      keyword: "Yellowstone",
      title: "El renacimiento de la exploración espacial",
      description:
        "Nuevos cohetes prometen viajes más baratos a la órbita terrestre.",
      date: "13 de mayo de 2026",
      source: "Agencia Espacial",
      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop",
    },
    {
      _id: "1",
      keyword: "Naturaleza",
      title: "Descubren nueva especie marina",
      description:
        "Biólogos encuentran un pez bioluminiscente en las profundidades del océano.",
      date: "11 de mayo de 2026",
      source: "National Sci",
      url: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=400&auto=format&fit=crop",
    },
    {
      _id: "2",
      keyword: "Yellowstone",
      title: "El renacimiento de la exploración espacial",
      description:
        "Nuevos cohetes prometen viajes más baratos a la órbita terrestre.",
      date: "13 de mayo de 2026",
      source: "Agencia Espacial",
      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop",
    },
    {
      _id: "1",
      keyword: "Naturaleza",
      title: "Descubren nueva especie marina",
      description:
        "Biólogos encuentran un pez bioluminiscente en las profundidades del océano.",
      date: "11 de mayo de 2026",
      source: "National Sci",
      url: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=400&auto=format&fit=crop",
    },
    {
      _id: "2",
      keyword: "Yellowstone",
      title: "El renacimiento de la exploración espacial",
      description:
        "Nuevos cohetes prometen viajes más baratos a la órbita terrestre.",
      date: "13 de mayo de 2026",
      source: "Agencia Espacial",
      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop",
    },
  ]);

  React.useEffect(() => {
    const storedCards = localStorage.getItem("latestNews");

    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  function handleSearch(keyword) {
    setIsLoading(true);
    setIsNotFound(false);
    setApiError(false);
    setCards([]);
    newsApi
      .getNews(keyword)
      .then((data) => {
        if (data.articles.length === 0) {
          setIsNotFound(true);
        } else {
          const dateOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          const formattedCards = data.articles.map((article) => {
            const rawDate = new Date(article.publishedAt);
            const formattedDate = rawDate.toLocaleDateString(
              "es-ES",
              dateOptions,
            );
            return {
              title: article.title,
              description: article.description,
              imageUrl: article.urlToImage,
              date: formattedDate,
              source: article.source.name,
              url: article.url,
              keyword: keyword,
            };
          });
          setCards(formattedCards);
          localStorage.setItem("latestNews", JSON.stringify(formattedCards));
        }
      })
      .catch((err) => {
        console.log("Error al buscar noticias:", err);
        setApiError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
              {apiError && (
                <p
                  style={{
                    textAlign: "center",
                    color: "#1a1b22",
                    marginTop: "20px",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Lo sentimos, algo ha salido mal durante la solicitud. Es
                  posible que haya un problema de conexión o que el servidor no
                  funcione. Por favor, inténtalo más tarde.
                </p>
              )}
              {cards.length > 0 && <NewsCardList cards={cards} />}
              <About />
            </>
          }
        />

        <Route
          path="/saved-news"
          element={
            <SavedNews currentUser={currentUser} savedArticles={savedNews} />
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
