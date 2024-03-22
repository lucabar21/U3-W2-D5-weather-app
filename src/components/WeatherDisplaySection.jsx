import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import WeatherIcons from "./WeatherIcons";
import { WiStrongWind, WiThermometer } from "react-icons/wi";
import { TiLocationOutline } from "react-icons/ti";

const WeatherDisplaySection = ({ apiData }) => {
  // condizione per evitare che al refresh della pagina l'app si rompa perchè l'array è vuoto o non definito
  if (!apiData || !apiData.weather) {
    return (
      <Container fluid id="hero-weather">
        <Spinner variant="light" animation="border" role="status" />
      </Container>
    );
  }

  console.log(apiData);

  return (
    <Container className="mt-3" fluid id="hero-weather">
      {apiData && (
        <>
          <Row id="weather-card">
            <Col className="col-sm-12 col-md-6 col-lg-3 d-flex gap-3">
              <div className="text-center">
                <TiLocationOutline />
                <h4>{apiData.name}</h4>
              </div>
            </Col>
            <Col className="col-sm-12 col-md-6 col-lg-3 d-flex gap-3 align-items-center">
              <div className="text-center d-flex flex-column">
                <WeatherIcons code={apiData.weather[0].icon} />
                <h4>{apiData.weather[0].description}</h4>
              </div>
            </Col>
            <Col className="col-sm-12 col-md-6 col-lg-3 d-flex gap-3">
              <div className="text-center">
                <WiStrongWind />
                <h4>speed: {Math.ceil(apiData.wind.speed)}</h4>
              </div>
            </Col>
            <Col className="col-sm-12 col-md-6 col-lg-3 d-flex gap-3">
              <div className="text-center">
                <WiThermometer />
                <h4>{Math.ceil(apiData.main.temp)} °C</h4>
              </div>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};
export default WeatherDisplaySection;
