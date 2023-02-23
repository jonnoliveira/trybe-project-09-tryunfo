import React from 'react';
import '../css/DeckExample.css';

function DeckExample() {
  return (
    <div className='container-deck-example'>
      <h2>Exemplos de cards:</h2>
      <div className='container-character-example'>
        <div className='info-char-example'>
          <h5>Nome:</h5>
          <p>Uzumaki Naruto</p>
        </div>
        <div className='info-char-text-example'>
          <h5>Descrição:</h5>
          <p> Ele se tornou o jinchūriki de Kurama no dia de seu nascimento, um destino que o levou a ser condenado ao ostracismo e ser negligenciado por toda a aldeia durante toda a sua infância. </p>
        </div>
        <div className='info-char-example'>
          <h5>Potencial destrutivo:</h5>
          <p>16 - 47</p>
        </div>
        <div className='info-char-example'>
          <h5>Resistência:</h5>
          <p>16 - 47</p>
        </div>
        <div className='info-char-example'>
          <h5>Velocidade:</h5>
          <p>40 - 63</p>
        </div>
        <div className='info-char-text-example'>
          <h5>URL:</h5>
          <p>https://sm.ign.com/t/ign_br/screenshot/default/blob_gm7y.1200.jpg</p>
        </div>
        <div className='info-char-example'>
          <h5>Raridade:</h5>
          <p> Raro</p>
        </div>
      </div>

      <div className='container-character-example'>
        <div className='info-char-example'>
          <h5>Nome:</h5>
          <p>Kurosaki Ichigo</p>
        </div>
        <div className='info-char-text-example'>
          <h5>Descrição:</h5>
          <p> A morte de Masaki sempre influenciou as ações de Ichigo desde então, fazendo-o se sentir culpado pela incapacidade de proteger as pessoas próximas a ele.  </p>
        </div>
        <div className='info-char-example'>
          <h5>Potencial destrutivo:</h5>
          <p>16 - 31</p>
        </div>
        <div className='info-char-example'>
          <h5>Resistência:</h5>
          <p>16 - 31</p>
        </div>
        <div className='info-char-example'>
          <h5>Velocidade:</h5>
          <p>40 - 63</p>
        </div>
        <div className='info-char-text-example'>
          <h5>URL:</h5>
          <p>https://criticalhits.com.br/wp-content/uploads/2021/04/ichigo-hollow-01-910x546.jpg</p>
        </div>
        <div className='info-char-example'>
          <h5>Raridade:</h5>
          <p> Raro</p>
        </div>
      </div>
    </div>
  )
}

export default DeckExample