import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div className="hero">
          <div className="side left">
            <div className="textblock">
              <h1>FitCalc</h1>
              <p>Calcula los parametros necesarios para cumplir con tus objetivos
                de transformación física.
              </p>
              <button>Ingresar</button>
              <span className="poweredby">Powered By Soul4FIT</span>
            </div>
          </div>
          <div className="side right">
            <img src="hero.jpg" alt="food" />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;