import './Home.css'
import { CircularProgress, Fab, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'
import { TodoModal, TodoList } from '../../components'
import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { createTodo, getAllTodo } from '../../services/todoServices'

function Home() {
  const [createTodoModalOpen, setCreateTodoModalOpen] = useState(false)
  const { isLoading, data: allTodos } = useQuery(['todos'], getAllTodo)
  const queryClient = useQueryClient()

  const { mutate } = useMutation(createTodo, {
    onSuccess: (res: any) => {
      console.log(res)
      if (res.status === 200) {
        // navigate('/')
        queryClient.invalidateQueries(['todos'])
        setCreateTodoModalOpen(false)
      } else {
        alert(res.data.error)
      }
    },
    onError: () => {
      alert('there was an error')
    },
  })

  return (
    <div className="App">
      <Typography variant="h2" fontWeight={'500'} color="white">
        Todo List
      </Typography>
      {isLoading ? <CircularProgress /> : <TodoList todoListData={allTodos?.data} />}
      <Fab color="primary" aria-label="add" className="fab-button" onClick={() => setCreateTodoModalOpen(true)}>
        <Add />
      </Fab>
      <TodoModal modalOpen={createTodoModalOpen} toggleModal={setCreateTodoModalOpen} onSave={mutate} />
    </div>
  )
}

export default Home
