import { Card as MuiCard, Box } from '@mui/material'
import PropTypes from 'prop-types'

export default function Card({ suit, rank }) {
  return (
    <MuiCard sx={{ width: '140px', height: '200px' }}>
      <Box
        sx={{ width: '100%', height: '100%' }}
        display="flex"
        flexDirection="column"
      >
        <Box sx={{ height: '30px', marginLeft: '10px' }} alignSelf="flex-start">
          {suit + rank}
        </Box>
        <Box sx={{ fontSize: '30px', height: '140px', lineHeight: '140px' }}>
          {suit ?? '?'}
        </Box>
        <Box sx={{ height: '30px', marginRight: '10px' }} alignSelf="flex-end">
          {suit + rank}
        </Box>
      </Box>
    </MuiCard>
  )
}

Card.propTypes = {
  suit: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired
}
