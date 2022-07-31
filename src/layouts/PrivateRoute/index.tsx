import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Header } from '../../components'

type Props = {
  path?: string
  element?: any
  children?: any
  allowedRoles?: any
}

const PrivateRoute = (props: Props) => {
  const auth = {
    roles: [1],
    user: true,
  }
  const location = useLocation()

  return auth?.roles?.find((role) => props.allowedRoles?.includes(role)) ? (
    <React.Fragment>
      <Header>
        <Outlet />
      </Header>
    </React.Fragment>
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default PrivateRoute
