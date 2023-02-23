import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/MiniCard.css';

class MiniCard extends Component {
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
      <div className="container-miniCard">
        <div className="miniCard">
          <h1 data-testid="name-miniCard" className="miniCard-title">{ cardName }</h1>
          <div className="miniCard-img">
            <img
              className="miniCard-img-top"
              src={ cardImage }
              alt={ cardName }
              data-testid="image-miniCard"
            />
          </div>
          <p
            data-testid="description-miniCard"
            className="miniCard-text"
          >
            { cardDescription }
          </p>
          <div className="miniCard-body">
            <div className="miniCard-body-atrb">
              <p className="miniCard-subtitle text-muted">Potencial Destrutivo</p>
              <p data-testid="attr1-card" className="miniCard-atrib">{ cardAttr1 }</p>
            </div>
            <div className="miniCard-body-atrb">
              <p className="miniCard-subtitle text-muted">Resistência</p>
              <p data-testid="attr2-card" className="miniCard-atrib">{ cardAttr2 }</p>
            </div>
            <div className="miniCard-body-atrb">
              <p className="miniCard-subtitle text-muted">Velocidade</p>
              <p data-testid="attr3-card" className="miniCard-atrib">{ cardAttr3 }</p>
            </div>
          </div>
          <div className='miniCard-classification'>
            {
              cardTrunfo 
                && <p data-testid="trunfo-card" className="miniCard-atrib-trunf">Super Trunfo</p>
            }
            <p data-testid="rare-card" className="miniCard-atrib-class">{ cardRare }</p>
          </div>
        </div>
      </div>
    );
  }
}

MiniCard.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default MiniCard;
