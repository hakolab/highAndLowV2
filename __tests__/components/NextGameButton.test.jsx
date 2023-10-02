import { render, screen, fireEvent } from '@testing-library/react'
import NextGameButton from '../../src/components/NextGameButton'

describe('NextGameButton コンポーネントのテスト', () => {
  test('ラベルが NEXT GAME であること', () => {
    render(<NextGameButton onClickNextGame={() => console.log('no operation')} />)

    expect(screen.getByText('NEXT GAME')).toBeInTheDocument()
  })

  test('ボタンクリックでイベントが発火すること', () => {
    const onClick = jest.fn()

    const { getByText } = render(<NextGameButton onClickNextGame={onClick} />)

    const button = getByText('NEXT GAME')
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('キープレスでイベントが発火すること', () => {
    const onKeyPress = jest.fn()

    const { getByText } = render(<NextGameButton onClickNextGame={onKeyPress} />)

    const button = getByText('NEXT GAME')
    expect(button).toBeInTheDocument()

    fireEvent.keyDown(button, { key: 'Enter' })
    fireEvent.keyDown(button, { key: 'n' })
    fireEvent.keyDown(button, { key: 't' })
    expect(onKeyPress).toHaveBeenCalledTimes(2)
  })
})
