import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";
import { useEffect } from "react";
import WeatherIcons from "./WeatherIcons";
import { WiStrongWind, WiThermometer } from "react-icons/wi";
import { TiLocationOutline } from "react-icons/ti";

const WeatherStaticSection = ({ query }) => {
  const [staticApiData, setStaticApiData] = useState([]);

  useEffect(() => {
    StaticWeatherFetch();
  }, [query]);

  const StaticWeatherFetch = () => {
    const myApiKey = "7b1ae3750b8a98eb795237b8466866f7";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${myApiKey}&units=metric`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Qualcosa è andato storto con la richiesta!`);
        }
      })
      .then((staticData) => {
        setStaticApiData(staticData);
      });
  };

  if (!staticApiData || !staticApiData.weather) {
    return (
      <Container fluid id="hero-weather">
        <Spinner variant="light" animation="border" role="status" />
      </Container>
    );
  }

  return (
    <Container className="mt-3" fluid id="hero-weather">
      {staticApiData && (
        <>
          <Col id="weather-card">
            <Col className=" d-flex gap-3">
              <div className="text-center">
                <TiLocationOutline />
                <h4>{staticApiData.name}</h4>
              </div>
            </Col>
            <Col className="d-flex gap-3 align-items-center">
              <div className="text-center d-flex flex-column">
                <WeatherIcons code={staticApiData.weather[0].icon} />
                <h4>{staticApiData.weather[0].description}</h4>
              </div>
            </Col>
          </Col>
        </>
      )}
    </Container>
  );
};
export default WeatherStaticSection;
