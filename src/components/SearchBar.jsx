import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/main.scss';

const SearchBar = ({ city, setCity, fetchWeather }) => {
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleButtonClick = () => {
    fetchWeather(city);
  };

  return (
    <div className="input-group mb-3 search-bar">
      <input
        type="text"
        className="form-control"
        placeholder="Digite a cidade"
        value={city}
        onChange={handleInputChange}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" onClick={handleButtonClick}>
          Obter Clima
        </button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  fetchWeather: PropTypes.func.isRequired,
};

export default SearchBar;
