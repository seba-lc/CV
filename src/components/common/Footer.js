// import gitHub from './../../assets/github.png'
// import linkedin from './../../assets/linkedin.png'
import Social from "./Social";

const Footer = ({width}) => {
  return (
    <div className="container-fluid text-light position-relative mt-3">
      <div className="row">
        <div className="col-12 mb-1">
          {
            width < 1200 ? <Social /> : null
          }
        </div>
      </div>
      <div className="row footer-style justify-content-center align-items-center text-center py-1">
        <div className="col-12">
          <p className='fs-6 py-0 footer-font'>© Derechos Reservados</p>
          <p className='fs-6 py-0 footer-font'>Sebastian López Cruz</p>
        </div>
      </div>
      <div className={width < 579 ? "col-12 text-center footer-font mt-1 ms-auto" : "position-absolute end-0 bottom-0 m-1 footer-font text-center"}>
        <p className="fst-italic">Currently v1.0</p>
        <p className="fst-italic">Last Update: 18/02/2022</p>
      </div>
    </div>
  );
};

export default Footer;