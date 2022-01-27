import { useState } from "react";

const SearchBar = ({ getWeatherData }) => {
  const [city, setCity] = useState("");
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      getWeatherData(city);
      setCity("");
    }
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="enter your city"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyDown={onKeyDown}
      />
      <button
        onClick={() => {
          getWeatherData(city);
          setCity("");
        }}
      >
        get my info
      </button>
    </div>
  );
};

export default SearchBar;
