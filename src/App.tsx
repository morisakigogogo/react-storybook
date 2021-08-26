import React, { Fragment } from 'react'
import './App.css'
import { Button } from '@material-ui/core';
import { Header, Content, Footer } from './Components/Layouts'
import { Counter } from './features/counter/Counter'

function App() {
  return (
    <Fragment> 
        <Header />
        <Counter />
        <Content />
        <Footer />
        <Button variant="contained" color="primary">Hello material-ui</Button>
    </Fragment>
  )
}

export default App
