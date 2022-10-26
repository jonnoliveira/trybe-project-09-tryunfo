import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>

        <label htmlFor="nameCard">
          Nome
          <input
            type="text"
            name="nameCard"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="descriptionCard">
          Descrição
          <textarea
            name="descriptionCard"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr1">
          Attr01
          <input
            type="number"
            name="attr1"
            id="attr1"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="attr2">
          Attr02
          <input
            type="number"
            name="attr2"
            id="attr2"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="attr3">
          Attr03
          <input
            type="number"
            name="attr3"
            id="attr3"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="imageCard">
          Imagem
          <input
            type="text"
            name="imageCard"
            id="imageCard"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="rareCard">
          Raridade
          <select name="rareCard" id="rareCard" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfoCard">
          <input
            type="checkbox"
            name="trunfoCard"
            id="trunfoCard"
            data-testid="trunfo-input"
          />
          Super Trunfo
        </label>

        <button type="submit" data-testid="save-button">Salvar</button>

      </form>
    );
  }
}

export default Form;
