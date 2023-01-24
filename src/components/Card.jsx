import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

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
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h1 data-testid="name-card" className="card-title">{ cardName }</h1>
            <div className="card">
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
              <p className="card-subtitle text-muted">Attr01</p>
              <p data-testid="attr1-card" className="card-text">{ cardAttr1 }</p>
            </div>
            <div className="card-body">
              <p className="card-subtitle text-muted">Attr02</p>
              <p data-testid="attr2-card" className="card-text">{ cardAttr2 }</p>
            </div>
            <div className="card-body">
              <p className="card-subtitle text-muted">Attr03</p>
              <p data-testid="attr3-card" className="card-text">{ cardAttr3 }</p>
            </div>
            <p data-testid="rare-card" className="card-text">{ cardRare }</p>
            {
              cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : null
            }
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
