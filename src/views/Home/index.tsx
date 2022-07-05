import React from 'react'
import logo from '../../assets/icons/logo.svg'
import './Home.css'
import CustomButton from '../../components/Button'
import { Header } from '../../components'

function Home({}) {
  return (
    // <CustomButton variant="outlined" label="Button" />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CustomButton label={'Button'} />
      </header>
    </div>
  )
}

export default Home
