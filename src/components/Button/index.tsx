import React from 'react'
import Button from '@mui/material/Button';

interface Props {
	variant?: String
	label: String
}

const CustomButton = (props: Props) => {
	return (
		<Button variant='outlined' >Button</Button>
	)
}

export default CustomButton