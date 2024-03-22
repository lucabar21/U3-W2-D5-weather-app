import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

const WeatherDisplaySection = ({ apiData }) => {
  // condizione per evitare che al refresh della pagina l'app si rompa perchè l'array è vuoto o non definito
  if (!apiData || !apiData.weather) {
    return (
      <Container fluid id="hero-weather">
        <Spinner variant="light" animation="border" role="status" />
      </Container>
    );
  }

  const meteo = apiData.weather[0];
  console.log(apiData);

  return (
    <Container fluid id="hero-weather">
      {apiData && (
        <Row className="flex-column" id="weather-card" key={apiData.id}>
          <Col className="col-5 d-flex gap-3 align-itmes-center">
            <h2>{apiData.name}</h2>
          </Col>
          <Col className="col-5 d-flex gap-3">
            <h2>{meteo.description}</h2>
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default WeatherDisplaySection;
