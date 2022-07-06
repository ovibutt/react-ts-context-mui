import { Typography } from '@mui/material'
import React from 'react'

type Props = {}

function Unauthorized(props: Props) {
  return (
    <Typography variant="h3" textAlign={'center'} p={10}>
      You are unauthorized to access this page
    </Typography>
  )
}

export default Unauthorized
