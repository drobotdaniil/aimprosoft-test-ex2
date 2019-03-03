import React from 'react';

export const FormErrors = ({ formErrors }) =>
  <div className='labels'>
    {
      <div>{formErrors}</div>
    }
  </div>

