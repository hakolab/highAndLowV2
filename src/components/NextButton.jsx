import PropTypes from 'prop-types'
import { useKeyPressListener } from '../hooks/useKeyPressListener'
import CustomButton from './CustomButton'
import Text from '../constants/text'

export default function NextButton({ onClickNext }) {
  useKeyPressListener('Enter', onClickNext)
  useKeyPressListener('n', onClickNext)

  return (
    <CustomButton variant="contained" onClick={onClickNext}>
      {Text.NEXT}
    </CustomButton>
  )
}

NextButton.propTypes = {
  onClickNext: PropTypes.func.isRequired
}
