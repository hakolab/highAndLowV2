import { render, screen } from '@testing-library/react'
import MessageBox from '../../src/components/MessageBox'

describe('MessageBox コンポーネントのテスト', () => {
  test('props.message が表示されること', () => {
    render(<MessageBox message="This is a test." />)

    expect(screen.getByText('This is a test.')).toBeInTheDocument()
  })
})
