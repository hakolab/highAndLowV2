import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export default function ScoreBoard({ score }) {
  return (
    <Box id={'score-board'}>
      <Typography id={'score-text'} variant={'h4'}>
        {score}
      </Typography>
    </Box>
  )
}

ScoreBoard.propTypes = {
  score: PropTypes.string.isRequired
}
