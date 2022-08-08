export interface TodoI {
  id?: number
  title: string
  description: string
  isDone: boolean
}
export interface TodoResponse {
  status: string
  statusMessage: string
  data: []
}
