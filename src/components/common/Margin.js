import imgCv from './../../assets/img-cv.jpg';
import gitHub from './../../assets/github.png'
import linkedin from './../../assets/linkedin.png'

const Margin = () => {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center w-100 text-light px-3 h-100">
      <div className='mt-4 d-flex flex-column align-items-center'>
        <img src={imgCv} width='220' className='rounded-circle border border-success border-5 image-style' alt="cv-image" />
        <h4 className='fs-4 text-center mt-3'>Sebastián López Cruz</h4>
        <h4 className='fs-5 fst-italic text-center my-2'>Ing. Civil // Web Developer Tr.</h4>
        <p className='text-center lh-sm my-2'>En el 2021 decidí perseguir un sueño, convertirme en desarrollador web. Enamorado de la profesión, muy entusiasmado y motivado por abrirme paso en este maravilloso mundo.</p>
        <p className='text-center lh-sm my-2'>Busco la posibilidad de incorporarme como Desarrollador Trainee/Junior. Soy una persona muy entusiasta, autodidacta y comprometida en mis responsabilidades.</p>
      </div>
      <div className='w-100 d-flex justify-content-center py-1'>
        <a href='https://github.com/seba-lc/' target='_blank' className='d-flex align-items-center text-light text-decoration-none'>
          <img className='bg-light rounded-circle p-1' src={gitHub} width={30} alt="" />
          <span className='ms-2'>GitHub</span>
        </a>
        <a href='https://www.linkedin.com/in/sebalc' target='_blank' className='d-flex align-items-center ms-4 text-light text-decoration-none'>
          <img  className='bg-light rounded-circle p-1' src={linkedin} width={30} alt="" />
          <span className='ms-2'>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Margin;