import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components'

type Props = {}

const AppLayout = (props: Props) => {
  return (
    <>
      {/* <Header> */}
      <Outlet />
      {/* </Header> */}
    </>
  )
}

export default AppLayout
