import { render } from '@testing-library/react'
import Card from '../../src/components/Card'

describe('Card コンポーネントのテスト', () => {
  test('props の値でトランプのマークと数字が表示されること', () => {
    const { getAllByText } = render(<Card rank="A" suit="♠" />)

    const divsOfRankSuit = getAllByText('♠A')
    expect(divsOfRankSuit).toHaveLength(2)

    const divsOfSuit = getAllByText('♠')
    expect(divsOfSuit).toHaveLength(1)
  })
})
