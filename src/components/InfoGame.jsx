import React from 'react';
import '../css/InfoGame.css';

function InfoGame() {
  return (
    <div className='info-container'>
      <h2>Informações sobre a classificação de poder</h2>
        <div className='info-level'>
          <h4>Nível 10: Humano</h4>
          <p>0 - 7</p>
        </div>
        <div className='info-level'>
          <h4>Nível 9: Sobre-Humano</h4>
          <p>8 - 15</p>
        </div>
        <div className='info-level'>
          <h4>Nível 8: Comunidade</h4>
          <p>16 - 23</p>
        </div>
        <div className='info-level'>
          <h4>Nível 7: Nuclear</h4>
          <p>24 - 31</p>
        </div>
        <div className='info-level'>
          <h4>Nível 6: Tectônico</h4>
          <p>32 - 39</p>
        </div>
        <div className='info-level'>
          <h4>Nível 5: Planetário</h4>
          <p>40 - 47</p>
        </div>
        <div className='info-level'>
          <h4>Nível 4: Estelar</h4>
          <p>48 - 55</p>
        </div>
        <div className='info-level'>
          <h4>Nível 3: Cósmico</h4>
          <p>56 - 63</p>
        </div>
        <div className='info-level'>
          <h4>Nível 2: Multiverso</h4>
          <p>64 - 71</p>
        </div>
        <div className='info-level'>
          <h4>Nível 1: Extradimensional Superior</h4>
          <p>72 - 79</p>
        </div>
        <div className='info-level'>
          <h4>Nível 0: Absoluto</h4>
          <p>80 - 90</p>
        </div>
        <small>
        Fonte:
        {' '}
          <a href='https://perfisecross.fandom.com/pt-br/wiki/Sistema_de_N%C3%ADveis#N%C3%ADvel_9:_Sobre-Humano'>Níveis de Poder</a>
          </small>
    </div>
  )
}

export default InfoGame