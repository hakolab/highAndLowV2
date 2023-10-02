import { useHighAndLow } from './hooks/useHighAndLow'
import Container from './components/Container'
import PlayArea from './components/PlayArea'
import ScoreBoard from './components/ScoreBoard'
import CardBox from './components/CardBox'
import MessageBox from './components/MessageBox'
import Controller from './components/Controller'

export default function HighAndLow() {
  const [state, action] = useHighAndLow()

  return (
    <Container>
      <PlayArea>
        {state.firstCard && state.secondCard && (
          <CardBox
            firstCardSuit={state.firstCard.suit}
            firstCardRank={state.firstCard.rank}
            secondCardSuit={state.secondCard.suit}
            secondCardRank={state.secondCard.rank}
          />
        )}
        {state.isGameStarted && <MessageBox message={action.getMessage()} />}
        <Controller
          answered={state.answered}
          isGameStarted={state.isGameStarted}
          isGameFinished={state.isGameFinished}
          startGame={action.startGame}
          next={action.next}
          check={action.check}
          nextGame={action.nextGame}
        />
      </PlayArea>
      <ScoreBoard score={action.getScore()} />
    </Container>
  )
}
