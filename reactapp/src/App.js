import React from 'react';
import Header from './components/Header';
import Image from './components/Image';
import TextComponent from './components/Textcomponent'; 


function App() {
  return (
    <div>
      <Header />
      <Image />
      <TextComponent text="¡Welcome to Barcelona!" /> {}
    </div>
  );
}

export default App;
