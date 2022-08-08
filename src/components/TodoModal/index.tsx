import { Modal, Box, Button, styled, TextField, Typography } from '@mui/material'
import { Dispatch, SetStateAction, useMemo, useEffect } from 'react'
import { useForm } from 'react-hook-form'
// import { createTodo, editTodo } from '../../services/todoServices'
import { Close } from '@mui/icons-material'
import { UseMutateFunction } from '@tanstack/react-query'
import { TodoI } from '../../types/TodoTypes'

type TodoModalProps = {
  modalOpen: boolean
  toggleModal: Dispatch<SetStateAction<boolean>>
  onSave: UseMutateFunction<{}, unknown, TodoI, unknown>
  editData?: TodoI
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  color: 'white',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
  background: 'grey',
}

function TodoModal({ modalOpen, toggleModal, onSave, editData }: TodoModalProps) {
  const Form = styled('form')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 10,
    width: '100%',
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: useMemo(() => {
      return editData
    }, [editData]),
  })
  useEffect(() => {
    reset(editData)
  }, [editData])
  const onSubmit = (data: any) => {
    data.isDone = editData === undefined ? false : editData?.isDone
    onSave(data)
  }

  return (
    <Modal sx={style} open={modalOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box>
        <Box flexDirection={'row'} display={'flex'} alignItems="center" justifyContent={'space-between'}>
          <Typography variant="h3">Create Todo</Typography>
          <Close sx={{ cursor: 'pointer' }} onClick={() => toggleModal(false)} />
        </Box>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="title"
            label="Title"
            variant="standard"
            fullWidth={true}
            color="secondary"
            sx={{ marginTop: 5, color: 'white' }}
            {...register('title', { required: true })}
            type="text"
          />
          {errors.title && <Typography>Title is required.</Typography>}

          <TextField
            id="description"
            label="Description"
            variant="standard"
            fullWidth={true}
            multiline={true}
            minRows={1}
            maxRows={5}
            color="secondary"
            sx={{ marginTop: 5 }}
            {...register('description', { required: true })}
            type="text"
          />
          {errors.description && <Typography>Description is required.</Typography>}
          <Box sx={{ position: 'absolute', bottom: 30, right: 50 }}>
            <Button onClick={() => toggleModal(false)} sx={{ color: 'white', marginRight: 2 }} variant="contained">
              Close
            </Button>
            <Button type="submit" sx={{ background: 'white', color: 'black' }} variant="contained">
              Save
            </Button>
          </Box>
        </Form>
      </Box>
    </Modal>
  )
}

export default TodoModal
