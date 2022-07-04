import React from 'react'
import logo from '../../assets/icons/logo.svg'
import './Home.css'
import CustomButton from '../../components/Button'
import { Header } from '../../components'

function Home({}) {
  return (
    <CustomButton variant="outlined" label="Button" />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     {/* <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //     <CustomButton label={"Button"} />
    //   </header>
    // </div>
  )
}

export default Home
