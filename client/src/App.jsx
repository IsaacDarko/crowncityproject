import React from 'react';
import './App.scss';

import { Header, TopShop, MidTop, MidSection, MidBottom, TailShop, Footer } from './containers';
import { Navbar } from './components'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <TopShop />
      <MidTop />
      <MidSection />
      <MidBottom />
      <TailShop />
      <Footer />
    </div>
  )
}

export default App;