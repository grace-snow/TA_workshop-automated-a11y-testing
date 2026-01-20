import React from 'react';
import Icon from './icon';

const IconButton = ({ name, onClick }) => {
  return (
    <button
      aria-label={name}
      className='btn-submit btn-lookingglass'
      data-testid='btn-submit'
      onClick={(event) => {
        onClick(event);
      }}>
      <span className='icon-lookingglass-white'></span>
      <Icon name={name} />
    </button>
  );
};

export default IconButton;
