import { ForgotUser, LoginUser, ProfileUser, SignupUser } from '../types/UserTypes'
import { api } from '../utils/api'

export const signupUser = async (data: SignupUser): Promise<{}> =>
  await api.post('/user/signup', data).then((response) => response.data)

export const loginUser = async (data: LoginUser): Promise<{}> =>
  await api.post('/user/login', data).then((response) => response.data)

export const getUserProfile = async (params: ProfileUser): Promise<{}> =>
  await api.get('/user/profile', { params }).then((response) => response.data)

export const forgotPassword = async (data: ForgotUser): Promise<{}> =>
  await api.put('/user/login', data).then((response) => response.data)
