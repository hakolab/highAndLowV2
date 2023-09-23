import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { useKeyPressListener } from '../hooks/useKeyPressListener'
import CustomButton from './CustomButton'
import Text from '../constants/text'

export default function StartButton({ onClickStart }) {
  useKeyPressListener('Enter', onClickStart)
  useKeyPressListener('s', onClickStart)

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <CustomButton variant="contained" onClick={onClickStart}>
        {Text.START}
      </CustomButton>
    </Box>
  )
}

StartButton.propTypes = {
  onClickStart: PropTypes.func.isRequired
}
