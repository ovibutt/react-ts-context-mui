import React from 'react'
import Button from '@mui/material/Button'

interface Props {
  variant?: 'text' | 'contained' | 'outlined' | undefined
  label: string
}

const CustomButton = (props: Props) => {
  return <Button variant={props.variant}>{props.label}</Button>
}

export default CustomButton
