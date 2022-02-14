const Education = ({width}) => {
  return (
    <div className={`text-start display-6 d-flex flex-column justify-content-center align-items-start text-light border-start ${width < 1200 ? 'px-3 mt-4' : 'px-5'}`}>
      <h2 className="mb-2">EDUCACIÓN</h2>
      <p className="fs-6 my-2 text-decoration-underline">FORMACION ACADEMICA</p>
      <p className="fs-6 my-1">♦ FULL STACK DEVELOPER - EN CURSO - Rolling Code School.</p>
      <p className="fs-6 my-1">♦ INGENIERIA CIVIL - COMPLETADO - Universidad Nacional de Tucumán (UNT) - Facultad de Ciencias Exactas y Tecnología, Tucumán, Argentina. (2013-2020)</p>
      <p className="fs-6 my-1">♦ FORMACION SECUNDARIA (Bachiller Científico) - COMPLETADO - Colegio Fasta Ángel María Boisdron, Tucumán, Argentina.</p>
      <p className="fs-6 my-2 text-decoration-underline">FORMACION COMPLEMENTARIA</p>
      <p className="fs-6 my-1">♦ TOEFL iBT (ETS). Año 2020. (High- Intermediate)</p>
      <p className="fs-6 my-1">♦ Capacitación en el software de cálculo estructural SAP2000. Spectra Calculistas Estructurales: 2020</p>
      <p className="fs-6 my-1">♦ Capacitación en el software de cálculo estructural CYPECAD. Spectra Calculistas Estructurales: 2019</p>
      <p className="fs-6 my-1">♦ Capacitación en el software de cálculo estructural RAM ELEMENTS. Universidad Nacional de Tucumán: 2018</p>
      <p className="fs-6 my-1">♦ UNSTA Facultad de Humanidades, Lenguaje Extranjero (2018): Inglés B1</p>
      <h2 className="my-2">EXPERIENCIA LABORAL</h2>
      <p className="fs-6 my-1">♦ Dirección técninca de obra: Ampliación de Hotel (2021)</p>
      <p className="fs-6 my-1">♦ VAS & Asociacos (2020): Ingeniero en diseño y cálculo de estructuras</p>
      <p className="fs-6 my-1">♦ Sigma Constructora (2019): Ayudante de Jefe de Obra</p>
      <p className="fs-6 my-1">♦ Ayudante Estudiantil en la Facultad de Ciencias Exactas y Tecnología (2016 / 2017)</p>
    </div>
  );
};

export default Education;