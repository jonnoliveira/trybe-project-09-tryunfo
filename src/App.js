import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filters from './components/Filters';

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
    infoCardSaved: [],
    nameFilter: '',
    rareFilter: 'todas',
    trunfoFilter: false,
    isFilterDisable: false,
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
        trunfoFilter,
      } = this.state;

      //  VALIDAÇÃO BOTAO
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

      //  VALIDAÇÃO TRUNFO
      const trunfoDisable = trunfoFilter === true;

      this.setState({ isFilterDisable: trunfoDisable });
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    } = this.state;

    const objCard = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };

    this.setState((prevState) => (
      { infoCardSaved: [...prevState.infoCardSaved, objCard],
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardRare: 'normal',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
      }), () => {
      const addTrunfo = cardTrunfo
        ? this.setState({
          hasTrunfo: true,
          cardTrunfo: false,
        })
        : this.setState({ hasTrunfo: false });

      return addTrunfo;
    });
  };

  onDeleteCard = (card, index) => {
    const { infoCardSaved } = this.state;

    if (card.cardTrunfo === true) {
      this.setState({ hasTrunfo: false });
    }
    infoCardSaved.splice(index, 1);
    this.setState({ infoCardSaved });
  };

  filtersFind = () => {
    const {
      infoCardSaved,
      nameFilter,
      rareFilter,
      trunfoFilter,
    } = this.state;

    return infoCardSaved.filter((card) => {
      if (nameFilter === '' && rareFilter === 'todas' && trunfoFilter === false) {
        return infoCardSaved;
      }
      if (nameFilter !== '' && rareFilter === 'todas' && trunfoFilter === false) {
        return card.cardName.includes(nameFilter);
      }
      if (nameFilter === '' && rareFilter !== 'todas' && trunfoFilter === false) {
        return card.cardRare === rareFilter;
      }
      if (trunfoFilter === true) {
        return card.cardTrunfo === trunfoFilter;
      }
      return card.cardName.includes(nameFilter);
    });
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
      infoCardSaved,
      nameFilter,
      rareFilter,
      trunfoFilter,
      isFilterDisable,
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
        <p>Carta:</p>
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
        <p>Deck de Cartas</p>
        <Filters
          infoCardSaved={ infoCardSaved }
          onInputChange={ this.onInputChange }
          nameFilter={ nameFilter }
          rareFilter={ rareFilter }
          trunfoFilter={ trunfoFilter }
          isFilterDisable={ isFilterDisable }
        />
        {
          infoCardSaved !== []
            ? this.filtersFind().map((card, index) => (
              <div key={ card.cardName }>
                <Card
                  key={ card.cardName }
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <button
                  type="reset"
                  data-testid="delete-button"
                  onClick={ () => this.onDeleteCard(card, index) }
                >
                  Excluir
                </button>
              </div>
            ))
            : null
        }
      </div>
    );
  }
}

export default App;
