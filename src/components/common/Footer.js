import gitHub from './../../assets/github.png'
import linkedin from './../../assets/linkedin.png'

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light">
      <div className="row footer-style justify-content-center align-items-center">
        <div className="col-12 col-sm-6 d-flex justify-content-center">
          <a href='https://github.com/seba-lc/' target='_blank' className='d-flex align-items-center text-light text-decoration-none'>
            <img className='bg-light rounded-circle p-1' src={gitHub} width={30} alt="" />
            <span className='ms-2'>GitHub</span>
          </a>
          <a href='https://www.linkedin.com/in/sebalc' target='_blank' className='d-flex align-items-center ms-4 text-light text-decoration-none'>
            <img  className='bg-light rounded-circle p-1' src={linkedin} width={30} alt="" />
            <span className='ms-2'>LinkedIn</span>
          </a>
        </div>
        <div className="col-12 col-sm-6 text-center">
          <p className='fst-italic fs-6 py-0'>© Derechos Reservados</p>
          <p className='fst-italic fs-6 py-0'>Sebastian López Cruz</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;