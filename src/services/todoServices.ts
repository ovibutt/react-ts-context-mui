import { NewTodo } from '../types/TodoTypes'
import { api } from '../utils/api'

const subUrl = 'todo'

export const getAllTodo = async (): Promise<{}> => await api.get(`/${subUrl}/all`).then((response) => response.data)

export const createTodo = async (data: NewTodo): Promise<{}> =>
  await api.post(`/${subUrl}/new`, data).then((response) => response.data)

export const editTodo = async (id: number): Promise<{}> =>
  await api.put(`/${subUrl}/todo/${id}`).then((response) => response.data)

export const deleteTodo = async (id: number): Promise<{}> =>
  await api.delete(`/${subUrl}/todo/${id}`).then((response) => response.data)

export const getTodo = async (id: number): Promise<{}> =>
  await api.get(`/${subUrl}/todo${id}`).then((response) => response.data)
