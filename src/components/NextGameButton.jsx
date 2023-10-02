import PropTypes from 'prop-types'
import { useKeyPressListener } from '../hooks/useKeyPressListener'
import CustomButton from './CustomButton'
import Text from '../constants/text'

export default function NextGameButton({ onClickNextGame }) {
  useKeyPressListener('Enter', onClickNextGame)
  useKeyPressListener('n', onClickNextGame)

  return (
    <CustomButton variant="contained" onClick={onClickNextGame}>
      {Text.NEXT_GAME}
    </CustomButton>
  )
}

NextGameButton.propTypes = {
  onClickNextGame: PropTypes.func.isRequired
}
