const Aboutme = ({width}) => {
  return (
    <div className={`text-start display-6 d-flex flex-column justify-content-center align-items-start text-light ${width < 1200 ? 'px-3 mt-4' : 'border-start px-5'}`}>
      <h2 className="mb-2">SOBRE MI</h2>
      <p className="fs-6 my-1 text-decoration-underline">EXTRACTO</p>
      <p className="fs-7 my-1">Actualmente realizando trabajos full stack como freelancer. Con la ilusión de formar parte de una empresa de desarrollo web.</p>
      <p className="fs-7 my-1">Ingeniero Civil graduado de la Universidad Nacional de Tucumán, con experiencia en el sector del cálculo estructural, y en la dirección técnica de obras. También experiencia como ayudante estudiantil de la Universidad.</p>
      <p className="fs-7 my-1">Todo alineado a una única directriz: CREAR. Ahora en un mundo sin límites ni fronteras: el mundo de la tecnología.</p>
      <p className="fs-6 my-2 text-decoration-underline">DATOS PERSONALES</p>
      <p className="fs-7 my-1">■ NOMBRE: Sebastián López Cruz</p>
      <p className="fs-7 my-1">■ DOMICILIO ACTUAL: Tucumán, Argentina</p>
      <p className="fs-7 my-1">■ EMAIL: sebalopezx@gmail.com</p>
      <p className="fs-7 my-1">■ NACIONALIDAD: Argentina</p>
    </div>
  );
};

export default Aboutme;