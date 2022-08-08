import React from 'react'
import { Box, styled, TextField, Typography, Button, Link } from '@mui/material'
import { useForm } from 'react-hook-form'
import { AccountCircle, Password } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { signupUser } from '../../services/userServices'

const Wrapper = styled('div')({
  backgroundColor: '#282c34',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
})
const LoginFormWrapper = styled('div')({
  backgroundColor: 'white',
  borderRadius: 5,
  height: 600,
  width: 400,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})

const Form = styled('form')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: 10,
  width: '100%',
})

function SignUp() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data: any) => {
    console.log(data)
    mutate(data)
  }

  const { mutate } = useMutation(signupUser, {
    onSuccess: (data: any) => {
      console.log(data)
      queryClient.setQueryData(['user'], data.data)
      navigate('/')
    },
    onError: () => {
      alert('there was an error')
    },
  })

  return (
    <Wrapper>
      <LoginFormWrapper>
        <Typography variant="h3" fontWeight={'bold'}>
          SignUp
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '70%', padding: 2 }}>
            <AccountCircle sx={{ mr: 1, my: 0.5 }} />
            <TextField
              id="userName"
              label="Username"
              variant="standard"
              sx={{ width: '100%' }}
              {...register('username', { required: true })}
              type="text"
            />
          </Box>
          {errors.password && <Typography>Username is required.</Typography>}

          <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '70%', padding: 2 }}>
            <Password sx={{ mr: 1, my: 0.5 }} />
            <TextField
              id="password"
              label="Password"
              variant="standard"
              sx={{ width: '100%' }}
              {...register('password', { required: true })}
              type="password"
            />
          </Box>
          {errors.password && <Typography>Password is required.</Typography>}
          <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '70%', padding: 2 }}>
            <Password sx={{ mr: 1, my: 0.5 }} />
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              variant="standard"
              sx={{ width: '100%' }}
              {...register('confirmPassword', { required: true })}
              type="password"
            />
          </Box>
          {errors.confirmPassword && <Typography>Confirm Password is required.</Typography>}
          <Button type="submit" variant="contained" sx={{ margin: 1 }}>
            SignUp
          </Button>
        </Form>
        <Typography paddingBottom={1}>or</Typography>
        <Link href="/login" fontSize={16}>
          Already have an account?
        </Link>
      </LoginFormWrapper>
    </Wrapper>
  )
}

export default SignUp
