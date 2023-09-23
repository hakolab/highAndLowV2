import PropTypes from 'prop-types'
import NextButton from './NextButton'
import HighAndLowButtons from './HighAndLowButtons'
import Check from '../constants/check'
import StartButton from './StartButton'

export default function Controller({
  answered,
  isGameStarted,
  isGameFinished,
  startGame,
  next,
  check
}) {
  function getButtons() {
    if (!isGameStarted) {
      return <StartButton onClickStart={startGame} />
    }
    if (isGameFinished) {
      return null
    }
    return answered ? (
      <NextButton onClickNext={next} />
    ) : (
      <HighAndLowButtons
        onClickHigh={() => check(Check.HIGH)}
        onClickLow={() => check(Check.LOW)}
      />
    )
  }

  return getButtons()
}

Controller.propTypes = {
  answered: PropTypes.bool.isRequired,
  isGameStarted: PropTypes.bool.isRequired,
  isGameFinished: PropTypes.bool.isRequired,
  startGame: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  check: PropTypes.func.isRequired
}
