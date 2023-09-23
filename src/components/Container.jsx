import { Box } from '@mui/material'
import PropTypes from 'prop-types'

export default function Container({ children }) {
  return <Box id="container">{children}</Box>
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}
