import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useEffect } from "react";
import WeatherBar from "./components/WeatherBar";
import WeatherDisplaySection from "./components/WeatherDisplaySection";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [apiData, setApiData] = useState([]);

  const handleSearchInputChange = (query) => {
    setSearchQuery(query);
  };

  const myApiKey = "7b1ae3750b8a98eb795237b8466866f7";

  const myApiWeatherFetch = async () => {
    try {
      const apiUrl = searchQuery
        ? `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${myApiKey}`
        : `https://api.openweathermap.org/data/2.5/weather?q=Rome&appid=${myApiKey}`;

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Qualcosa è andato storto con la richiesta!`);
      }
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    myApiWeatherFetch();
  }, [searchQuery]);

  useEffect(() => {
    myApiWeatherFetch();
  }, []);

  return (
    <div className="App">
      <WeatherBar handleSearchInputChange={handleSearchInputChange} />
      <WeatherDisplaySection apiData={apiData} />
    </div>
  );
}

export default App;
