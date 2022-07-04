import { Box, Typography } from '@mui/material'
import React, { Component } from 'react'

type ErrorBoundaryProps = {
  children?: any
  classes?: any
}

type ErrorBoundaryState = {
  error: any
  errorInfo: any
  hasError: any
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: any) {
    super(props)
    this.state = { error: null, errorInfo: null, hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error }
  }

  componentDidCatch(error: any, errorInfo: any) {
    // For debugging
    console.log({ error, errorInfo })
    this.setState({ error, errorInfo })
  }
  render() {
    // Error path
    if (this.state.hasError) {
      return (
        <div>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="60vh">
            <Typography variant="h3">
              <div>OOps!!! Something went wrong</div>
            </Typography>
            {process.env.REACT_APP_ENV === 'development' && (
              <Box>
                <details style={{ whiteSpace: 'pre-wrap', cursor: 'pointer', marginTop: 20 }}>
                  {this.state?.error && this.state?.error?.toString()}
                  <br />
                  {this.state?.errorInfo?.componentStack}
                </details>
              </Box>
            )}
          </Box>
        </div>
      )
    }

    // Normally, just render children
    return this.props.children
  }
}

export default ErrorBoundary
