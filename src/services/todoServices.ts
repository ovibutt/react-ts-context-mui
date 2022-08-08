import { TodoI, TodoResponse } from '../types/TodoTypes'
import { api } from '../utils/api'

const subUrl = 'todo'

export const getAllTodo = async (): Promise<TodoResponse> =>
  await api.get(`/${subUrl}/all`).then((response) => response.data)

export const createTodo = async (data: TodoI): Promise<{}> =>
  await api.post(`/${subUrl}/new`, data).then((response) => response.data)

export const editTodo = async (data: TodoI): Promise<{}> =>
  await api.put(`/${subUrl}`, data).then((response) => response.data)

export const deleteTodo = async (id: number): Promise<{}> =>
  await api.delete(`/${subUrl}/${id}`).then((response) => response.data)

export const getTodo = async (id: number): Promise<{}> =>
  await api.get(`/${subUrl}${id}`).then((response) => response.data)
