import React from 'react';

const IconButton = ({ name, onClick }) => {
  return (
    <button
      className='btn-submit btn-lookingglass'
      data-testid='btn-submit'
      onClick={(event) => {
        onClick(event);
      }}
      aria-label={name}>
      <span className='icon-lookingglass-white'></span>
    </button>
  );
};

export default IconButton;
