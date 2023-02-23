import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Card.css';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="container-maker">
        <div className="card">
          <h1 data-testid="name-card" className="card-title">{ cardName }</h1>
          <div className="card-img">
            <img
              className="card-img-top"
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
            />
          </div>
          <p
            data-testid="description-card"
            className="card-text"
          >
            { cardDescription }
          </p>
          <div className="card-body">
            <div className="card-body-atrb">
              <p className="card-subtitle text-muted">Potencial Destrutivo</p>
              <p data-testid="attr1-card" className="card-atrib">{ cardAttr1 }</p>
            </div>
            <div className="card-body-atrb">
              <p className="card-subtitle text-muted">Resistência</p>
              <p data-testid="attr2-card" className="card-atrib">{ cardAttr2 }</p>
            </div>
            <div className="card-body-atrb">
              <p className="card-subtitle text-muted">Velocidade</p>
              <p data-testid="attr3-card" className="card-atrib">{ cardAttr3 }</p>
            </div>
          </div>
          <div className='classification'>
            {
              cardTrunfo 
                && <p data-testid="trunfo-card" className="card-atrib-trunf">Super Trunfo</p>
            }
            <p data-testid="rare-card" className="card-atrib-class">{ cardRare }</p>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
