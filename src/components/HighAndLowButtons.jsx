import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import { useKeyPressListener } from '../hooks/useKeyPressListener'
import CustomButton from './CustomButton'
import Text from '../constants/text'

export default function HighAndLowButtons({ onClickHigh, onClickLow }) {
  useKeyPressListener('h', onClickHigh)
  useKeyPressListener('l', onClickLow)

  return (
    <Box display="flex" flexDirection="row" justifyContent="center">
      <Box mx={1}>
        <CustomButton variant="contained" onClick={onClickHigh}>
          {Text.HIGH}
        </CustomButton>
      </Box>
      <Box mx={1}>
        <CustomButton variant="contained" onClick={onClickLow}>
          {Text.LOW}
        </CustomButton>
      </Box>
    </Box>
  )
}

HighAndLowButtons.propTypes = {
  onClickHigh: PropTypes.func.isRequired,
  onClickLow: PropTypes.func.isRequired
}
