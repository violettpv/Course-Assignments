import React from 'react'
import dubai_1 from '../assets/images/dubai.jpg';

function Image() {
  return (
    <div>
      <a href='https://www.visitdubai.com/uk' target='_blank' rel="noreferrer">
        <img alt='dubai-1' src={dubai_1} width='700' height='auto'/>
      </a>
    </div>
  );
}

export default Image;
