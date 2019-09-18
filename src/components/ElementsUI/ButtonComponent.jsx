import React from 'react';
import './Styles/Button.scss';

export default function ButtonComponent({content, type, ...custom}) {
  return (
      <button className="button" type={type} {...custom}>
        {content}
      </button>   
  );
}