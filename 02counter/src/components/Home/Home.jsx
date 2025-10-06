import React, { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const url = "https://restcountries.com/v3.1/name/United%20States";
    let response = await fetch(url);
    response = await response.json();
    setCountryData(response);
    console.log(response);
  }

  return (
    <div className="home">
      <h1>Get data from API</h1>

      {countryData.length > 0 ? (
        countryData.map((item, index) => (
          <div key={index} className="country-card">
            <img src={item.flags.png} alt={item.name.common} width="100" />
            <h2>{item.name.common}</h2>
            <p><strong>Capital:</strong> {item.capital ? item.capital[0] : "N/A"}</p>
            <p><strong>Region:</strong> {item.region}</p>
            <p><strong>Population:</strong> {item.population.toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
