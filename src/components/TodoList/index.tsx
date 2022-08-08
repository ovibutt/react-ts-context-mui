import React, { useState } from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Checkbox, Divider, Typography, Box } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import AlertDialog from '../AlertDialog'
import TodoModal from '../TodoModal'
import { useMutation } from '@tanstack/react-query'
import { deleteTodo, editTodo } from '../../services/todoServices'
import { TodoI } from '../../types/TodoTypes'

type TodoListProps = {
  todoListData?: Todo[]
}
type Todo = {
  id: number
  title: string
  description: string
  isDone: boolean
}

function TodoList({ todoListData }: TodoListProps) {
  const [alertOpen, setAlertOpen] = useState(false)
  const [editTodoModal, setEditTodoModal] = useState(false)
  const [editTodoData, setEditTodoData] = useState({} as TodoI)
  const [deleteTodoId, setDeleteTodoId] = useState(0)

  const { mutate } = useMutation(deleteTodo, {
    onSuccess: (res: any) => {
      console.log(res)
      if (res.status === 200) {
        setAlertOpen(false)
      } else {
        alert(res.data.error)
      }
    },
    onError: () => {
      alert('there was an error')
    },
  })

  const { mutate: editTodoMutate } = useMutation(editTodo, {
    onSuccess: (res: any) => {
      console.log(res)
      if (res.status === 200) {
        setEditTodoModal(false)
      } else {
        alert(res.data.error)
      }
    },
    onError: () => {
      alert('there was an error')
    },
  })

  const _deleteTodo = () => {
    mutate(deleteTodoId)
  }

  const updateDone = (data: TodoI) => {
    data.isDone = !data.isDone
    editTodoMutate(data)
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 450, color: 'white', borderColor: 'white', border: 1, marginTop: 10 }}
      dense={true}>
      {todoListData?.map((item: Todo, index: number) => {
        const labelId = `checkbox-list-label-${item}`
        return (
          <>
            <ListItem
              key={item.id}
              secondaryAction={
                <Box
                  sx={{
                    marginLeft: 3,
                    flexDirection: 'column',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Delete
                    sx={{ cursor: 'pointer' }}
                    onClick={() => {
                      setAlertOpen(true)
                      setDeleteTodoId(item.id)
                    }}
                  />
                  <Divider color="white" sx={{ color: 'white', margin: 1 }} />
                  <Edit
                    sx={{ cursor: 'pointer' }}
                    onClick={() => {
                      setEditTodoData(item)
                      setEditTodoModal(true)
                    }}
                  />
                </Box>
              }>
              <ListItemIcon>
                <Checkbox
                  sx={{ color: 'white' }}
                  color="secondary"
                  edge="start"
                  checked={item.isDone}
                  tabIndex={-1}
                  // disableRipple
                  onClick={() => updateDone(item)}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={
                  <Typography variant="h6" color="white" fontWeight={'700'}>
                    {item.title}
                  </Typography>
                }
                secondary={
                  <Typography variant="subtitle1" color="white">
                    {item.description}
                  </Typography>
                }
              />
            </ListItem>
            {index !== todoListData.length - 1 && <Divider variant="inset" color="white" />}
          </>
        )
      })}
      <AlertDialog
        open={alertOpen}
        handleAgree={_deleteTodo}
        handleClose={setAlertOpen}
        title="Delete Todo?"
        description="Are you sure you want to delete todo?"
      />
      <TodoModal
        modalOpen={editTodoModal}
        toggleModal={setEditTodoModal}
        onSave={editTodoMutate}
        editData={editTodoData}
      />
    </List>
  )
}

export default TodoList
