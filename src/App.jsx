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
import mainApi from "./utils/MainApi";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({ name: "" });
  const [isSavedNews, setIsSavedNews] = React.useState(false);
  const [apiError, setApiError] = React.useState(false);

  const [savedNews, setSavedNews] = React.useState([]);

  React.useEffect(() => {
    const storedCards = localStorage.getItem("latestNews");

    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi
        .getUserInfo(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            setCurrentUser(res.data || res);
          }
        })
        .catch((err) => console.log("Token inválido o expirado:", err));
    }
  }, []);

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (isLoggedIn && jwt) {
      mainApi
        .getSavedArticles(jwt)
        .then((articles) => {
          setSavedNews(articles.reverse());
        })
        .catch((err) =>
          console.log("Error al cargar artículos guardados:", err),
        );
    }
  }, [isLoggedIn]);

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

  function handleLoginSubmit({ email, password }) {
    mainApi
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setIsLoggedIn(true);
          setIsLoginPopupOpen(false);
          mainApi
            .getUserInfo(res.token)
            .then((userData) => {
              setCurrentUser(userData.data || userData);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => {
        console.log("Error al iniciar sesión:", err);
      });
  }

  function handleRegisterSubmit({ email, password, name }) {
    mainApi
      .register(email, password, name)
      .then(() => {
        setIsRegisterPopupOpen(false);
        setIsInfoTooltipOpen(true);
      })
      .catch((err) => {
        console.log("Error al registrarse:", err);
      });
  }

  function handleLogOut() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({ name: "" });
  }

  function handleSaveArticle(article) {
    const jwt = localStorage.getItem("jwt");
    mainApi
      .saveArticle(article, jwt)
      .then((savedArticle) => {
        setSavedNews([savedArticle, ...savedNews]);
      })
      .catch((err) => console.log("Error al guardar el artículo:", err));
  }

  function handleDeleteArticle(articleId) {
    const jwt = localStorage.getItem("jwt");
    mainApi
      .deleteArticle(articleId, jwt)
      .then(() => {
        setSavedNews((state) => state.filter((c) => c._id !== articleId));
      })
      .catch((err) => console.log("Error al borrar el artículo:", err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div>
        <Header
          onLoginClick={handleLoginClick}
          onRegisterClick={handleRegisterClick}
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          onLogOut={handleLogOut}
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
                    posible que haya un problema de conexión o que el servidor
                    no funcione. Por favor, inténtalo más tarde.
                  </p>
                )}
                {cards.length > 0 && (
                  <NewsCardList
                    cards={cards}
                    onSaveArticle={handleSaveArticle}
                    onDeleteArticle={handleDeleteArticle}
                    isLoggedIn={isLoggedIn}
                  />
                )}
                <About />
              </>
            }
          />

          <Route
            path="/saved-news"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedNews
                  currentUser={currentUser}
                  savedArticles={savedNews}
                  onDeleteArticle={handleDeleteArticle}
                />
              </ProtectedRoute>
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
          onRegister={handleRegisterSubmit}
        />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={() => setIsInfoTooltipOpen(false)}
          onLoginClick={handleLoginClick}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
