import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from '../layouts'
import { ROLES } from '../utils/constants'

const Login = lazy(() => import('../views/Login'))
const SignUp = lazy(() => import('../views/SignUp'))
const Home = lazy(() => import('../views/Home'))
const Unauthorized = lazy(() => import('../views/Unauthorized'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Private Routes */}
        {/* <Route path="/" element={<AppLayout />}> */}
        <Route element={<PrivateRoute allowedRoles={[ROLES.user]} />}>
          <Route path="/" element={<Home />} />
        </Route>
        {/* </Route> */}

        {/* Catch Route */}
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
