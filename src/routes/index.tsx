import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../assets/theme'
import { PrivateRoute } from '../layouts'

const Login = lazy(() => import('../views/Login'))
const SignUp = lazy(() => import('../views/SignUp'))
const Home = lazy(() => import('../views/Home'))

const AppRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <PrivateRoute path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default AppRoutes
