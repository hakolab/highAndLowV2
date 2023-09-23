import { render, screen } from '@testing-library/react'
import ScoreBoard from '../../src/components/ScoreBoard'

describe('MessageBox コンポーネントのテスト', () => {
  test('props.message が表示されること', () => {
    render(<ScoreBoard score="This is a test." />)

    expect(screen.getByText('This is a test.')).toBeInTheDocument()
  })
})
