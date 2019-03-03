import React from 'react';
import error_ico from './img/error.png';
import success_ico from './img/success.png';

export const FormErrorsFalse = ({ isValid }) =>
  <div className='false'>
    {
      <img srcSet={getImage(isValid)} alt="" />
    }
  </div>

function getImage(isValid) {
  if (isValid === null)
    return '';

  return isValid ? success_ico : error_ico;
}