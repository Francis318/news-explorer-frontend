import React from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

function SavedNews({ currentUser, savedArticles }) {
  return (
    <main className="saved-news">
      <SavedNewsHeader
        currentUser={currentUser}
        savedArticles={savedArticles}
      />

      <section className="saved-news__container">
        <NewsCardList cards={savedArticles} isSavedNews={true} />
      </section>
    </main>
  );
}

export default SavedNews;
