import imgCv from './../../assets/img-cv-2.webp';
import Resume from './Resume';
import Social from './Social';

const Margin = ({width}) => {
  
  return (
    <div className="d-flex flex-column justify-content-between align-items-center w-100 text-light px-3 h-100">
      <div className={`row align-items-center ${width < 992 ? 'list-box' : null}`}>
        <div className='col-12 col-lg-6 col-xl-12 d-flex flex-column align-items-center'>
          <div className='rounded-circle border border-success border-5 image-style'>
            {/* <img src={imgCv} width={150} className='image-style' alt="cv-image" /> */}
          </div>
          <h4 className='fs-4 text-center mt-3'>Sebastián López Cruz</h4>
          <h4 className='fs-5 fst-italic text-center my-2'>Node JS & React JS dev. // Ing. Civil</h4>
        </div>
        {
          width < 992 ? null : <Resume />
        }
      </div>
      {
        width < 1200 ? null : <Social />
      }
    </div>
  );
};

export default Margin;