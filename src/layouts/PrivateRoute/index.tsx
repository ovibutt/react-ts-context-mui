import React from 'react'
import { Header } from '../../components'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

type Props = {
  path?: string
  element?: any
  children?: any
  allowedRoles?: any
}

const PrivateRoute = (props: Props) => {
  const auth = {
    roles: [2],
    user: true,
  }
  const location = useLocation()

  return auth?.roles?.find((role) => props.allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default PrivateRoute
