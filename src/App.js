import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useEffect } from "react";
import WeatherBar from "./components/WeatherBar";
import WeatherDisplaySection from "./components/WeatherDisplaySection";
import WeatherStaticSection from "./components/WeatherStaticSection";
import WeatherFooter from "./components/WeatherFooter";

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
        ? `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${myApiKey}&units=metric`
        : `https://api.openweathermap.org/data/2.5/weather?q=Rome&appid=${myApiKey}&units=metric`;

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
      <h3 style={{ color: "#0d6dfd" }} className="text-center mt-3">
        What is the weather around the world?
      </h3>
      <Row>
        <Col className="col-sm-12 col-md-6 p-0">
          <WeatherStaticSection query="Milan" />
        </Col>
        <Col className="col-sm-12 col-md-6 p-0">
          <WeatherStaticSection query="New York" />
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-12 col-md-6 p-0">
          <WeatherStaticSection query="Seul" />
        </Col>
        <Col className="col-sm-12 col-md-6 p-0">
          <WeatherStaticSection query="Sidney" />
        </Col>
      </Row>
      <WeatherFooter />
    </div>
  );
}

export default App;
