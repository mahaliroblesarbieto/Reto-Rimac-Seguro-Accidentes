import React from "react";
import "./Styles/AdIntro.scss";
import { Row, Col } from "react-styled-flexboxgrid";
import Rectangle from "../../assets/Rectangle.png"

const AdIntro = () => {
  return (
    <div>
      <img className="rectangle" src={Rectangle}></img>
      <div className="absolute">
        <p className="white">Seguro de <br></br> accidentes para <br></br> Niños y Jóvenes</p>
        <div >
          <p className="white"><i className="fas fa-briefcase-medical icon"> </i> Atención médica y medicinas</p>
          <p className="white"><i className="fas fa-briefcase-medical icon"> </i> Examenes de laboratorio</p>
          <p className="white"><i className="fas fa-briefcase-medical icon"> </i> Hospitalización y rehabilitación</p>
          <p className="white"><i className="fas fa-briefcase-medical icon"> </i> Cirugías y operaciones</p>
        </div>
      </div>
    </div>
  )

}

export default AdIntro;