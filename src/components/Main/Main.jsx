import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";

function Main({ onSearch }) {
  return (
    <main className="main">
      <SearchForm onSearch={onSearch} />
    </main>
  );
}

export default Main;
