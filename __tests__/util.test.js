import * as util from '../src/util'

const expectedDeckData = {
  suits: ['♠', '♣', '♦', '❤'],
  ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
}

describe('util 処理をテストします。', () => {
  test('getDeck の確認', () => {
    const deck = util.getDeck()

    expect(deck).toHaveLength(52)
    // suits * 4, ranks * 13 = 52 パターンをチェック
    // suit + rank が一致する要素を取り出し、一つしかないことを確認。
    expectedDeckData.suits.forEach((suit) => {
      expectedDeckData.ranks.forEach((rank) => {
        const filteredItem = deck.filter((a) => a.suit + a.rank === suit + rank)
        expect(filteredItem).toHaveLength(1)
      })
    })
  })

  test('getRankNum の確認', () => {
    expect(util.getRankNum('A')).toBe(1)
    expect(util.getRankNum('2')).toBe(2)
    expect(util.getRankNum('3')).toBe(3)
    expect(util.getRankNum('4')).toBe(4)
    expect(util.getRankNum('5')).toBe(5)
    expect(util.getRankNum('6')).toBe(6)
    expect(util.getRankNum('7')).toBe(7)
    expect(util.getRankNum('8')).toBe(8)
    expect(util.getRankNum('9')).toBe(9)
    expect(util.getRankNum('10')).toBe(10)
    expect(util.getRankNum('J')).toBe(11)
    expect(util.getRankNum('Q')).toBe(12)
    expect(util.getRankNum('K')).toBe(13)
  })

  test('getMaskCard の確認', () => {
    const maskCard = util.getMaskCard()
    expect(maskCard.suit).toBe('?')
    expect(maskCard.rank).toBe('?')
  })
})
