import React from "react";
import "./Styles/Carousel.scss";

const Carousel = () => {
	return (
		<div className="carousel">
				<p><span >Seguro de accidentes para </span>Niños y Jóvenes</p>
				<p><span>En accidentes </span>los cubrimos al 100% <span>para que se recuperen por completo.</span></p>
				<p>Los cubrimos al 100% <span>para recuperación completa</span></p>
				<div>
					<p><i className="fas fa-briefcase-medical icon"> </i> Atención médica y medicinas</p>
					<p><i className="fas fa-briefcase-medical icon"> </i> Examenes de laboratorio</p>
					<p><i className="fas fa-briefcase-medical icon"> </i> Hospitalización y rehabilitación</p>
					<p><i className="fas fa-briefcase-medical icon"> </i> Cirugías y operaciones</p>
				</div>
				<p><i className="fas fa-chevron-left icon"></i> 01 / 05 <i className="fas fa-chevron-right"></i></p>
				<p>&#169; 2018 RIMAC Seguros y Reaseguros.</p>
		</div>
	)
};

export default Carousel;