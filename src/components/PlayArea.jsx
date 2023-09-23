import { Box } from '@mui/material'
import PropTypes from 'prop-types'

export default function PlayArea({ children }) {
  return <Box id="play-area">{children}</Box>
}

PlayArea.propTypes = {
  children: PropTypes.node.isRequired
}
