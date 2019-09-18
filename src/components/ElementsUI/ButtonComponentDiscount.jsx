import React from 'react';
import './Styles/ButtonDiscount.scss';

export default function ButtonComponentDiscount({content, type, ...custom}) {
  return (
      <button className="buttonDiscount" type={type} {...custom}>
        {content}
      </button>   
  );
}