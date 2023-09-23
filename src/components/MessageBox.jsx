import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export default function MessageBox({ message }) {
  return (
    <Box id="message-box">
      <Typography variant="h5" id="message">
        {message}
      </Typography>
    </Box>
  )
}

MessageBox.propTypes = {
  message: PropTypes.string.isRequired
}
