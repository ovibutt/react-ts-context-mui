import React from 'react'
import { Box, styled, TextField, Typography, Button, Link } from '@mui/material'
import { useForm } from 'react-hook-form'
import { AccountCircle, Password } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../services/userServices'
import { useMutation } from '@tanstack/react-query'

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

function Login() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => {
    mutate(data)
  }

  const { mutate } = useMutation(loginUser, {
    onSuccess: (res: any) => {
      console.log(res)
      if (res.status === 200) {
        navigate('/')
      } else {
        alert(res.data.error)
      }
    },
    onError: () => {
      alert('there was an error')
    },
  })

  return (
    <Wrapper>
      <LoginFormWrapper>
        <Typography variant="h3" fontWeight={'bold'}>
          Login
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
          <Button type="submit" variant="contained" sx={{ margin: 1 }}>
            Login
          </Button>
        </Form>
        <Typography paddingBottom={1}>or</Typography>
        <Link href="/signup" fontSize={16}>
          Create a new account?
        </Link>
      </LoginFormWrapper>
    </Wrapper>
  )
}

export default Login
