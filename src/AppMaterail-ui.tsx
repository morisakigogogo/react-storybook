import React, { Fragment } from 'react'
import './App.css'
import { Button } from '@material-ui/core';
import { Header, Content, Footer } from './Components/Layouts'

function App() {
  return (
    <Fragment> 
        <Header />
        <Content />
        <Footer />
        <Button variant="contained" color="primary">Hello material-ui</Button>
    </Fragment>
  )
}

export default App
