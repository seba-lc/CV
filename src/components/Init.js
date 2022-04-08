import { ListGroup, Button, Modal } from "react-bootstrap";
import TecItem from "./TecItem";
import toeflTest from "./../files/toefl.pdf";
import { useState } from "react";

const Init = ({width}) => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div className={`text-center text-light container-fluid ${width < 1200 ? null : 'border-start'}`}>
      <h2 className={`fs-2 mb-3 px-3 ${width < 1200 ? 'text-center mt-5' : 'text-start'}`}>HABILIDADES</h2>
      <div className="d-flex justify-content-around row">
        <div className={`col-12 col-lg-6 px-3 ${width < 1200 ? 'list-box' : null}`}>
          <h4 className="text-start pb-1 fs-5">TECNOLOGÍAS FRONT-END</h4>
          <ListGroup className="list-style">
            <TecItem tecnology="HTML" progress={9} />
            <TecItem tecnology="CSS" progress={9} />
            <TecItem tecnology="Bootstrap" progress={9} />
            <TecItem tecnology="Metodología SCRUM" progress={5} />
            <TecItem tecnology="Git / GitHub" progress={9} />
            <TecItem tecnology="Diseños Responsive" progress={9} />
            <TecItem tecnology="JavaScript" progress={9} />
            <TecItem tecnology="ReactJS" progress={9} />
            <TecItem tecnology="APIs" progress={9} />
          </ListGroup>
          <h4 className="mt-3 text-start pb-1 fs-5">TECNOLOGÍAS BACK-END</h4>
          <ListGroup className="list-style">
            <TecItem tecnology="MongoDB" progress={8} />
            <TecItem tecnology="Express" progress={8} />
            <TecItem tecnology="Node JS" progress={8} />
          </ListGroup>
        </div>
        <div className={`px-3 col-12 col-lg-6 ${width < 1200 ? 'list-box' : null}`}>
          <h4 className="text-start pb-1 fs-5">IDIOMAS</h4>
          <ListGroup className="list-style">
            <ListGroup.Item className="text-start px-2 py-1">
              ESPAÑOL (NATIVO)
            </ListGroup.Item>
            <ListGroup.Item className="text-start px-2 py-1">
              INGLES
            </ListGroup.Item>
            <TecItem tecnology="• Reading" progress={9} />
            <TecItem tecnology="• Listening" progress={8} />
            <TecItem tecnology="• Writing" progress={7} />
            <TecItem tecnology="• Speaking" progress={7} />
            <ListGroup.Item className="text-center px-2 py-1">
              <p className="text-start my-2 fst-italic">
                "Si bien durante toda mi vida el idioma inglés fue parte de mi
                vida (colegio, cursos, exámenes), en el año 2021 tuve el agrado
                de realizar una experiencia de 5 meses en el exterior que
                permitió mejorar mis habilidades"
              </p>
              <p className="my-2 pt-1 border-top text-start">
                En el año 2020 rendí el examen TOEFL iBT: High-Intermediate{" "}
                {/* <button
                  className="btn-nostyle fst-italic ps-1"
                  onClick={handleShow}
                >
                  Ver Documento
                </button> */}
              </p>

              {/* <Modal
                show={show}
                onHide={handleClose}
                className="position-fixed modal-style"
              >
                <Modal.Body>
                  <embed
                    src={toeflTest}
                    type="application/pdf"
                    width={500}
                    height={600}
                  />
                </Modal.Body>
              </Modal> */}
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Init;
