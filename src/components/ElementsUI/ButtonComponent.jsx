import React from 'react';
import './Styles/Button.scss';

export default function ButtonComponent({content, type}) {
  return (
      <button className="button" type={type}>
        {content}
      </button>   
  );
}