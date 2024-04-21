import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchedText, setSearchedText] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchedText.trim() !== "") {
      setSearchedText("");
      navigate(`/${searchedText}`);
    }
  };

  return (
    <div className="search-box  border-color: rgb(0 0 0); dark:bg-black">
      <input
        type="text"
        className="text-box"
        value={searchedText}
        onChange={(e) => {
          setSearchedText(e.target.value);
        }}
        onKeyDown={(e) => (e.code === "Enter" ? handleSearch(e) : "")}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
