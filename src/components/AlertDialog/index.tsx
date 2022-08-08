import { Dispatch, forwardRef, ReactElement, Ref, SetStateAction } from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Button } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

type AlertDialogProps = {
  open: boolean
  handleClose: Dispatch<SetStateAction<boolean>>
  title: string
  description: string
  handleAgree: Dispatch<SetStateAction<boolean>>
}

export default function AlertDialog({ open, handleClose, title, description, handleAgree }: AlertDialogProps) {
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Disagree</Button>
          <Button onClick={() => handleAgree(false)}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
