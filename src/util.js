import cardData from './data/card.json'

export function getDeck() {
  const { suits, ranks } = cardData

  const deck = []
  suits.map((suit) => ranks.map((rank) => deck.push({ suit, rank })))
  return deck
}

export function getRankNum(rank) {
  switch (rank) {
    case 'A':
      return 1
    case 'J':
      return 11
    case 'Q':
      return 12
    case 'K':
      return 13
    default:
      return Number(rank)
  }
}

export function getMaskCard() {
  return { suit: '?', rank: '?' }
}
