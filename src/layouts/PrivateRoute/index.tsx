import React from 'react'
import { Header } from '../../components'
import { Route } from 'react-router-dom'

type Props = {
  path?: string
  element?: any
  children?: any
}

const PrivateRoute = (props: Props) => {
  return (
    <>
      <Header />
      <Route path={props.path} element={props.element} />
    </>
  )
}

export default PrivateRoute
