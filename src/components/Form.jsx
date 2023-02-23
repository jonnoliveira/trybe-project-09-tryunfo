/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Form.css';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const sum = () => {
      return( (parseInt(cardAttr1) + parseInt(cardAttr2) + parseInt(cardAttr3)) > 210)
    }

    return (
      <form className="form-floating">

        <div className="input-group">
          <label htmlFor="cardName">Nome</label>
          <input
            type="text"
            className='input'
            name="cardName"
            id="cardName"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
            placeholder="Nome da sua carta"
          />

          <label htmlFor="cardDescription">Descrição</label>
          <textarea
            name="cardDescription"
            className='input'
            id="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            placeholder="História da carta"
          />

          <label htmlFor="cardAttr1">Potencial Destrutivo</label>
          <input
            type="number"
            name="cardAttr1"
            id="cardAttr1"
            className='input'
            value={ cardAttr1 }
            min={ 0 }
            max={ 90 }
            onChange={ onInputChange }
            data-testid="attr1-input"
            placeholder="Quantidade do atributo"
          />

          <label htmlFor="cardAttr2">Resistência</label>
          <input
            type="number"
            name="cardAttr2"
            id="cardAttr2"
            className='input'
            value={ cardAttr2 }
            min={ 0 }
            max={ 90 }
            onChange={ onInputChange }
            data-testid="attr2-input"
            placeholder="Quantidade do atributo"
          />

          <label htmlFor="cardAttr3">Velocidade</label>
          <input
            type="number"
            name="cardAttr3"
            id="cardAttr3"
            className='input'
            value={ cardAttr3 }
            min={ 0 }
            max={ 90 }
            onChange={ onInputChange }
            data-testid="attr3-input"
            placeholder="Quantidade do atributo"
          />
        {
          sum() === true 
            && (
              <p className='alert-message'>A somatória dos atributos não deve ser superior a 210!</p>
            )
        }
          <label htmlFor="cardImage">Imagem</label>
          <input
            type="text"
            name="cardImage"
            id="cardImage"
            className='input'
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
            placeholder="URL da imagem"

          />

          <label htmlFor="cardRare">Raridade</label>
          <select
            name="cardRare"
            id="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </div>

        {
          hasTrunfo
            ? <p className="alert-message">Você já tem um Super Trunfo em seu baralho!</p>
            : (
              <div className='trunfo'>
                  <input
                    className="input-trunfo"
                    type="checkbox"
                    name="cardTrunfo"
                    id="cardTrunfo"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                    data-testid="trunfo-input"
                  />
                <label htmlFor="cardTrunfo">Super Trunfo</label>
              </div>
            )
        }
        <button
          id="submit-btn"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
          className="save-btn"
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,

  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
