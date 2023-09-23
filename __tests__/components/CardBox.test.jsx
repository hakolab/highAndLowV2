import { render } from '@testing-library/react'
import CardBox from '../../src/components/CardBox'

describe('CardBox コンポーネントのテスト', () => {
  test('カードが２枚表示されていること', () => {
    const { getAllByText } = render(
      <CardBox
        firstCardSuit="♦"
        firstCardRank="K"
        secondCardSuit="♠"
        secondCardRank="2"
      />
    )

    const divsOfFirstCard = getAllByText('♦K')
    expect(divsOfFirstCard).toHaveLength(2)

    const divsOfSecondCard = getAllByText('♠2')
    expect(divsOfSecondCard).toHaveLength(2)
  })
})
