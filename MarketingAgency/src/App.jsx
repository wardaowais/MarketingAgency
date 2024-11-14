import React from 'react'
import Header from './components/Header';
import Navside from './components/Navside';
import Content from './components/Content';
import Section from './components/section';
import Page from './components/Page';
const App = () => {
  return (
    <div className='flex '>
      <Navside />

      <div className='flex flex-col'>
        <Header />

        <Content />

        <Section />

        <Page />
      </div>

    </div>
  )
}

export default App
