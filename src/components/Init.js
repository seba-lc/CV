import { ListGroup, Button, Modal } from "react-bootstrap";
import TecItem from "./TecItem";
import { useState } from "react";
import Resume from "./common/Resume";

const Init = ({width}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={`text-center text-light container-fluid ${width < 1200 ? null : 'border-start'}`}>
      {
        width < 992 ? <Resume /> : null
      }
      <h2 className={`fs-2 mb-3 px-3 ${width < 1200 ? 'text-center mt-4' : 'text-start'}`}>HABILIDADES</h2>
      <div className="d-flex justify-content-around row">
        <div className={`col-12 col-lg-6 px-3 ${width < 1200 ? 'list-box' : null}`}>
          <h4 className="text-start pb-1 fs-5">TECNOLOGÍAS FRONT-END</h4>
          <ListGroup className="list-style">
            <TecItem tecnology="HTML" progress={9} />
            <TecItem tecnology="CSS" progress={9} />
            <TecItem tecnology="Bootstrap" progress={9} />
            <TecItem tecnology="Metodología SCRUM" progress={9} />
            <TecItem tecnology="Git / GitHub" progress={9} />
            <TecItem tecnology="Diseños Responsive" progress={9} />
            <TecItem tecnology="JavaScript" progress={9} />
            <TecItem tecnology="ReactJS" progress={9} />
            <TecItem tecnology="Consumo de APIs" progress={9} />
          </ListGroup>
          <h4 className="mt-3 text-start pb-1 fs-5">TECNOLOGÍAS BACK-END</h4>
          <ListGroup className="list-style">
            <TecItem tecnology="Node JS" progress={9} />
            <TecItem tecnology="Express" progress={9} />
            <TecItem tecnology="Mongoose" progress={9} />
            <TecItem tecnology="MongoDB" progress={9} />
          </ListGroup>
        </div>
        <div className={`px-3 col-12 col-lg-6 ${width < 1200 ? 'list-box' : null}`}>
          <h4 className={`text-start pb-1 fs-5 ${width < 1152 ? 'mt-3' : null}`}>IDIOMAS</h4>
          <ListGroup className="list-style">
            <ListGroup.Item className="text-start px-2 py-1">
              ESPAÑOL (NATIVO)
            </ListGroup.Item>
            <ListGroup.Item className="text-start px-2 py-1">
              INGLES
            </ListGroup.Item>
            <TecItem tecnology="• Reading" progress={9} />
            <TecItem tecnology="• Listening" progress={8} />
            <TecItem tecnology="• Writing" progress={9} />
            <TecItem tecnology="• Speaking" progress={7} />
            <ListGroup.Item className="text-center px-2 py-1">
              <p className="text-start my-2 fst-italic">
                "Si bien durante toda mi vida el idioma inglés fue parte (colegio, cursos, exámenes), en el año 2021 tuve el agrado
                de realizar una experiencia de 5 meses en un país de habla inglesa que
                permitió mejorar mis habilidades"
              </p>
              <p className="my-2 pt-1 border-top text-start">
                En el año 2020 rendí el examen TOEFL iBT: High-Intermediate{" "}
              </p>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Init;
