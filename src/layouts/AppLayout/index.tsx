import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components'

type Props = {}

const AppLayout = (props: Props) => {
  return (
    <React.Fragment>
      <Header>
        <Outlet />
      </Header>
    </React.Fragment>
  )
}

export default AppLayout
