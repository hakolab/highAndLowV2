import { useState } from 'react'
import { getDeck, getRankNum, getMaskCard } from '../util'
import Check from '../constants/check'
import Text from '../constants/text'

export const useHighAndLow = () => {
  const [deck, setDeck] = useState(getDeck)
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)
  const [isWin, setIsWin] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [isGameFinished, setIsGameFinished] = useState(false)
  const [winCount, setWinCount] = useState(0)
  const [loseCount, setLoseCount] = useState(0)

  function getCard() {
    const index = Math.floor(Math.random() * deck.length)
    const cardObj = deck[index]
    const newDeck = deck.slice()
    newDeck.splice(index, 1)
    setDeck(newDeck)
    return cardObj
  }

  function startGame() {
    setIsGameStarted(true)
    setFirstCard(getCard)
    setSecondCard(getMaskCard)
  }

  function isHigh(firstRank, secondRank) {
    return getRankNum(firstRank) < getRankNum(secondRank)
  }

  function isLow(firstRank, secondRank) {
    return getRankNum(firstRank) >= getRankNum(secondRank)
  }

  function check(highOrLow) {
    const newSecondCard = getCard()
    setSecondCard(newSecondCard)

    const newIsWin =
      Check.HIGH === highOrLow
        ? isHigh(firstCard.rank, newSecondCard.rank)
        : isLow(firstCard.rank, newSecondCard.rank)
    setIsWin(newIsWin)

    if (newIsWin) {
      setWinCount(winCount + 1)
    } else {
      setLoseCount(loseCount + 1)
    }
    setAnswered(true)
  }

  function next() {
    if (deck.length === 0) {
      setIsGameFinished(true)
    } else {
      const newFirstCard = { ...secondCard }
      setFirstCard(newFirstCard)
      setSecondCard(getMaskCard)
      setAnswered(false)
    }
  }

  function getScore() {
    return isGameStarted
      ? `${Text.WIN}: ${winCount} ${Text.LOSE}: ${loseCount}`
      : null
  }

  function getMessage() {
    let message
    if (isGameFinished) {
      message = Text.THANK_YOU_FOR_PLAYING
    } else if (answered) {
      message = isWin ? Text.YOU_WIN : Text.YOU_LOSE
    } else {
      message = Text.HIGH_OR_LOW
    }
    return message
  }

  return [
    {
      deck,
      firstCard,
      secondCard,
      isWin,
      answered,
      isGameStarted,
      isGameFinished,
      winCount,
      loseCount
    },
    {
      startGame,
      check,
      next,
      getMessage,
      getScore
    }
  ]
}
