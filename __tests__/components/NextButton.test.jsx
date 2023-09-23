import { render, screen, fireEvent } from '@testing-library/react'
import NextButton from '../../src/components/NextButton'

describe('NextButton コンポーネントのテスト', () => {
  test('ラベルが NEXT であること', () => {
    render(<NextButton onClickNext={() => console.log('no operation')} />)

    expect(screen.getByText('NEXT')).toBeInTheDocument()
  })

  test('ボタンクリックでイベントが発火すること', () => {
    const onClick = jest.fn()

    const { getByText } = render(<NextButton onClickNext={onClick} />)

    const button = getByText('NEXT')
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('キープレスでイベントが発火すること', () => {
    const onKeyPress = jest.fn()

    const { getByText } = render(<NextButton onClickNext={onKeyPress} />)

    const button = getByText('NEXT')
    expect(button).toBeInTheDocument()

    fireEvent.keyDown(button, { key: 'Enter' })
    fireEvent.keyDown(button, { key: 'n' })
    fireEvent.keyDown(button, { key: 't' })
    expect(onKeyPress).toHaveBeenCalledTimes(2)
  })
})
