import React from 'react';

function DeleteButtonH({ onDelete }) {
  return (
    <button
      onClick={onDelete}
      style={{
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '4px',
      }}
    >
      Delete
    </button>
  );
}

export default DeleteButtonH;
