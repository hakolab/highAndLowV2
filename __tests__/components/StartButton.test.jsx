import { render, screen, fireEvent } from '@testing-library/react'
import StartButton from '../../src/components/StartButton'

describe('StartButton コンポーネントのテスト', () => {
  test('ラベルが START であること', () => {
    render(<StartButton onClickStart={() => console.log('no operation')} />)

    expect(screen.getByText('START')).toBeInTheDocument()
  })

  test('ボタンクリックでイベントが発火すること', () => {
    const onClick = jest.fn()

    const { getByText } = render(<StartButton onClickStart={onClick} />)

    const button = getByText('START')
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('キープレスでイベントが発火すること', () => {
    const onKeyPress = jest.fn()

    const { getByText } = render(<StartButton onClickStart={onKeyPress} />)

    const button = getByText('START')
    expect(button).toBeInTheDocument()

    fireEvent.keyDown(button, { key: 'Enter' })
    fireEvent.keyDown(button, { key: 's' })
    fireEvent.keyDown(button, { key: 't' })
    expect(onKeyPress).toHaveBeenCalledTimes(2)
  })
})
