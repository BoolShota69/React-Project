import React from 'react';
import DeleteButtonH from './DeleteButtonH.jsx';

function CardH({ id, NamaHewan, Jenis, Habitat, onDelete }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '20px' }}>
          <p>Nama Hewan    : {NamaHewan}</p>
          <p>Jenis Makanan : {Jenis}</p>
          <p>Habitat       : {Habitat}</p>
        </div>
      </div>
      <DeleteButtonH onDelete={onDelete} />
    </div>
  );
}

export { CardH };
