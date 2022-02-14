import gitHub from './../../assets/github.png';
import linkedin from './../../assets/linkedin.png';

const Social = () => {
  return (
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
  );
};

export default Social;