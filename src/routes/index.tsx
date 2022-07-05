import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppLayout, PrivateRoute } from '../layouts'
import { ROLES } from '../utils/constants'
import Unauthorized from '../views/Unauthorized'

const Login = lazy(() => import('../views/Login'))
const SignUp = lazy(() => import('../views/SignUp'))
const Home = lazy(() => import('../views/Home'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/unuthorized" element={<Unauthorized />} />

          {/* Private Routes */}
          <Route element={<PrivateRoute allowedRoles={[ROLES.editor]} />}>
            <Route path="/" element={<Home />} />
          </Route>

          {/* Catch Route */}
          {/* <Route path="*" element={<Home />} /> */}
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
