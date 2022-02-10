import imgCv from './../../assets/img-cv.jpg';

const Margin = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <img src={imgCv} width='220' className='rounded-circle border border-success border-5 image-style mx-3' alt="cv-image" />
      <div className='w-100 text-light'>
        <h4 className='fs-4 text-center mt-3'>Sebastián López Cruz</h4>
        <h4 className='fs-5 fst-italic text-center my-2'>Ing. Civil // Web Developer Tr.</h4>
        <p className='text-center lh-sm my-2'>Busco la posibilidad de incorporarme como Desarrollador Trainee/Junior. Soy una persona muy entusiasta, autodidacta y comprometida en mis responsabilidades.</p>
        <p className='text-center lh-sm my-2'>Encontré, luego de algunas pruebas y errores, una pasión hacia la tecnología que quiero explotar dando lo mejor de mí.</p>
        <p className='text-center lh-sm'>Tecnología === Creación sin límites</p>
      </div>
    </div>
  );
};

export default Margin;