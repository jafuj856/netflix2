import React from 'react';
import './App.css'
import NaveBar from './components/navbar/NaveBar';
import Banner from './components/banner/Banner';
import RowPost from './components/rowpost/RowPost';

import {originals,action,documentory} from './Urls'

function App() {

  return (
   <div className='App'>
      <NaveBar/>
      <Banner/>
      <RowPost url={originals} title='NetFlix Orginals' />
      <RowPost url={action} title='Action Movies' isSmall />
      <RowPost url={documentory} title='Documentaries' isSmall />
   </div>
  );
}

export default App;