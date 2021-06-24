import React from 'react'
import GlobalStyles from './GlobalStyles'

import Header from './components/Header'
import SvgArea from './components/SvgItem'
import FormArea from './components/FormArea'
import SvgFooter from './components/SvgFooter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Header/>
      <SvgArea/>
      <FormArea/>
      <SvgFooter/>
      <Footer/>
    </div>
  );
}

export default App;