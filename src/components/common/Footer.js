// import gitHub from './../../assets/github.png'
// import linkedin from './../../assets/linkedin.png'

const Footer = () => {
  return (
    <div className="container-fluid text-light position-relative">
      <div className="row footer-style justify-content-center align-items-center text-center py-1">
        <div className="col-12">
          <p className='fs-6 py-0 footer-font'>© Derechos Reservados</p>
          <p className='fs-6 py-0 footer-font'>Sebastian López Cruz</p>
        </div>
      </div>
      <div className="position-absolute end-0 bottom-0 m-2 footer-font text-center">
        <p className="fst-italic">Currently v1.0</p>
        <p className="fst-italic">Last Update: 11/02/2022</p>
      </div>
    </div>
  );
};

export default Footer;