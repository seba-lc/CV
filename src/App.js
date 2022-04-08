import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Init from "./components/Init";
import Footer from "./components/common/Footer";
import Margin from "./components/common/Margin";
import Optional from "./components/Optional";
import Aboutme from "./components/Aboutme";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState (window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


  return (
    <>
      <Container fluid className="main-page">
        <Row className="h-100">
          <Header width = {width} />
          <Col xl={3} className="cv-margin">
            <Margin width = {width} />
          </Col>
          <Col
            xl={9}
            className="bg-transparent d-flex flex-column justify-content-start position-relative"
          >
            <Routes>
              <Route exact path="/" element={<Init width = {width} />} />
              <Route exact path="/optional" element={<Optional />} />
              <Route exact path="/aboutme" element={<Aboutme width = {width} />} />
              <Route exact path="/education" element={<Education width = {width} />} />
              <Route exact path="/portfolio" element={<Portfolio width = {width} />} />
            </Routes>
            <Footer width = {width} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
