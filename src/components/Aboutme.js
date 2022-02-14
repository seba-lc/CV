const Aboutme = ({width}) => {
  return (
    <div className={`text-start display-6 d-flex flex-column justify-content-center align-items-start text-light border-start ${width < 1200 ? 'px-3 mt-4' : 'px-5'}`}>
      <h2 className="mb-2">ABOUT-ME</h2>
      <p className="fs-6 my-1 text-decoration-underline">EXTRACTO</p>
      <p className="fs-6 my-1">En el 2021 decidí perseguir un sueño, convertirme en desarrollador web. Actualmente transitando el camino del back-end (MongoDB, Express, React, NodeJS), luego de haber finalizado con front-end (HTML, CSS, JavaScript, Frameworks, ReactJS, Git). Enamorado de la profesión, muy entusiasmado y motivado por abrirme paso en este maravilloso mundo. </p>
      <p className="fs-6 my-1">Ingeniero Civil graduado de la Universidad Nacional de Tucumán, con experiencia en el sector del cálculo estructural, y en la dirección técnica de obras. También experiencia como ayudante estudiantil de la Universidad.</p>
      <p className="fs-6 my-1">Todo alineado con una única directriz: CREAR. Ahora en un mundo sin límites ni fronteras: el mundo de la tecnología.</p>
      <p className="fs-6 my-2 text-decoration-underline">DATOS PERSONALES</p>
      <p className="fs-6 my-1">■ NOMBRE: Sebastián López Cruz</p>
      <p className="fs-6 my-1">■ DOMICILIO ACTUAL: Yerba Buena, Tucumán, Argentina</p>
      <p className="fs-6 my-1">■ CELULAR: +5493813038285</p>
      <p className="fs-6 my-1">■ EMAIL: sebalopezx@gmail.com</p>
      <p className="fs-6 my-1">■ ESTADO CIVIL: Soltero</p>
      <p className="fs-6 my-1">■ NACIONALIDAD: Argentina</p>
      <p className="fs-6 my-1">■ NACIMIENTO: 28/10/1994</p>
      <p className="fs-6 my-2 text-decoration-underline">HOBBIES</p>
      <p className="fs-6 my-1">Amante de los deportes, la lectura, la escritura. Asombrado por las capacidades del intelecto humano, busco siempre llevarme al límite.</p>
    </div>
  );
};

export default Aboutme;