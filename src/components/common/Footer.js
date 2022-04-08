// import gitHub from './../../assets/github.png'
// import linkedin from './../../assets/linkedin.png'
import Social from "./Social";

const Footer = ({width}) => {
  return (
    <div className={`container-fluid text-light footer-general-style mt-3 ${width < 1200 ? null : 'position-absolute bottom-0'}`}>
      <div className="row w-100 d-flex position-relative">
        {
          width < 1200 ? <div className="col-12 mb-1"><Social /></div> : null
        }
        <div className="col-12 text-center">
          <p className='fs-6 py-0 footer-font'>© Derechos Reservados</p>
          <p className='fs-6 py-0 footer-font'>Sebastian López Cruz</p>
        </div>
        <div className={`footer-font ${width < 1200 ? "col-12 text-center mt-1" : "position-absolute me-2 top-0 end-0 version-style text-end"}`}>
          <p className="fst-italic">Currently v1.0</p>
          <p className="fst-italic">Last Update: 08/04/2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;