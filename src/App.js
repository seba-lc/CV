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

function App() {
  return (
    <>
      <div className="container-fluid d-flex main-page">
        <div className="cv-margin">
          <Margin />
        </div>
        <div className="bg-transparent w-100 d-flex flex-column justify-content-between ">
          <Header />
          <Routes>
            <Route exact path="/" element={<Init />} />
            <Route exact path="/optional" element={<Optional />} />
            <Route exact path="/aboutme" element={<Aboutme />} />
            <Route exact path="/education" element={<Education />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
