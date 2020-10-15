import React from 'react';
import ReactDOM from 'react-dom';
import ProgressiveImage from './ProgressiveImage';

import './styles.css';

function TestImage() {
  return (
    <div className="App">
      <ProgressiveImage
        className={'cover'}
        alt={'woman'}
        overlaySrc={
          'https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=5'
        }
        src={
          'https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        }
      />
    </div>
  );
}
