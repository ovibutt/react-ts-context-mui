import { createContext, useState } from 'react'

interface AuthContextInterface {
  auth: any
  setAuth: any
}

const AuthContext = createContext<AuthContextInterface | null>(null)

type AuthContextProps = {
  children: any
}

export const AuthProvider = (props: AuthContextProps) => {
  const [auth, setAuth] = useState({})

  // return <AuthContext.Provider value={{ auth, setAuth }}>{props.children}</AuthContext.Provider>
}

export default AuthContext
