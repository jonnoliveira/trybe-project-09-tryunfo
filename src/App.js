import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;

    const sum = (
      parseFloat(cardAttr1.value)
      + parseFloat(cardAttr2.value)
      + parseFloat(cardAttr3.value));

    const maxSumValue = 210;
    const maxValue = 91;
    const minValue = 0;

    this.setState({
      [name]: value,
    }, () => {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      } = this.state;

      const inputName = cardName.length === 0;
      const inputDescription = cardDescription.length === 0;
      const inputImage = cardImage.length === 0;
      const inputRare = cardRare.length === 0;
      const inputSumAttr = sum > maxSumValue;
      const Attr1 = cardAttr1 < minValue || cardAttr1 >= maxValue;
      const Attr2 = cardAttr2 < minValue || cardAttr2 >= maxValue;
      const Attr3 = cardAttr3 < minValue || cardAttr3 >= maxValue;

      const isValid = inputName || inputDescription || inputImage || inputRare
      || inputSumAttr || Attr1 || Attr2 || Attr3;

      this.setState({ isSaveButtonDisabled: isValid });
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
  };

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
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
