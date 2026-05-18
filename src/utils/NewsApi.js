class NewsApi {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("Error:" + res.status);
  }

  getNews(keyword) {
    const toDate = new Date();

    const fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - 7);

    const to = toDate.toISOString().split("T")[0];
    const from = fromDate.toISOString().split("T")[0];

    const url = `${this._baseUrl}?q=${keyword}&from=${from}&to=${to}&apiKey=${this._apiKey}`;

    return fetch(url).then(this._checkResponse);
  }
}

const newsApi = new NewsApi({
  baseUrl: "https://nomoreparties.co/news/v2/everything",
  apiKey: "0b5f063f32a04a3bbd4a61a90948e9c7",
});

export default newsApi;
