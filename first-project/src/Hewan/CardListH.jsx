import React from 'react';
import { CardH } from './CardH';

function CardListH({ dataHewan, onDelete }) {
  return (
    <div className='card-list'>
      {dataHewan.map((hewan) => (
        <CardH
          {...hewan}
          key={hewan.id}
          id={hewan.id}
          onDelete={() => onDelete(hewan.id)}
        />
      ))}
    </div>
  );
}

export default CardListH; // Ensure CardList is exported as default
