import marketImg from './../assets/market-png.webp'

const Portfolio = ({width}) => {
  return (
    <div className={`text-center text-light d-flex align-items-center my-5 ms-5 flex-wrap ${width < 1200 ? 'justify-content-start' : 'justify-content-start'}`}>
      <a as="div" href='https://marketar.herokuapp.com/' target="_blank" className="proyect-box border border-dark my-3 py-0" id="marketar">
        <div className="bg-opacity text-dark fw-bolder">
          MARKETAR
          <img src={marketImg} width={40} className="ms-2" alt="" />
        </div>
      </a>
      <div className='marketar-description text-start ms-3'>
        <h5 className='mb-2'>Plataforma e-commerce (08/04/2022) - En desarrollo</h5>
        <p>- Frontend: ReactJS, Javascript, HTML, CSS, Frameworks.</p>
        <p>- Backend: NodeJS, Express, Mongoose, tokens, encriptación.</p>
        <p>- Servidor: MongoDB.</p>
      </div>
    </div>
  );
};

export default Portfolio;