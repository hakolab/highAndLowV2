import { Box, Typography } from '@mui/material'
import Text from '../constants/text'

export default function Title() {
  return (
    <>
      <Typography variant="h1">
        <Box className="h1-header">{Text.GAME_TITLE}</Box>
      </Typography>
      <Typography variant="h2">
        <Box className="h2-header">{Text.GAME_SUB_TITLE}</Box>
      </Typography>
    </>
  )
}
