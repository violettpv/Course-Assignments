import React from 'react';
import './App.css';
import Header from './components/Header';
import { Content } from './components/Content';
import Image from './components/Image';
import ImageWithButtons from './components/ImageWithButtons';
import GoodsCards from './components/GoodsCards';

function App() {
  return (
    <div className='App'>
      <Header />
      <Content />
      <Image />
      <ImageWithButtons/>

      <GoodsCards />
    </div>
  );
}

export default App;
