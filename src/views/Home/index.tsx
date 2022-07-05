import React from 'react'
import logo from '../../assets/icons/logo.svg'
import './Home.css'
import CustomButton from '../../components/Button'

type HomeProps = {}

function Home(props: HomeProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CustomButton label={'Button'} />
      </header>
    </div>
  )
}

export default Home
