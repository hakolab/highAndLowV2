import { render, screen, fireEvent } from '@testing-library/react'
import HighAndLowButtons from '../../src/components/HighAndLowButtons'

describe('HighAndLowButtons コンポーネントのテスト', () => {
  test('ラベルが NEXT であること', () => {
    render(
      <HighAndLowButtons
        onClickLow={() => console.log('no operation')}
        onClickHigh={() => console.log('no operation')}
      />
    )

    expect(screen.getByText('HIGH')).toBeInTheDocument()
    expect(screen.getByText('LOW')).toBeInTheDocument()
  })

  test('ボタンクリックでイベントが発火すること', () => {
    const onClickLow = jest.fn()
    const onClickHigh = jest.fn()

    const { getByText } = render(
      <HighAndLowButtons onClickLow={onClickLow} onClickHigh={onClickHigh} />
    )

    const buttonLow = getByText('LOW')
    expect(buttonLow).toBeInTheDocument()

    fireEvent.click(buttonLow)
    expect(onClickLow).toHaveBeenCalledTimes(1)

    const buttonHigh = getByText('HIGH')
    expect(buttonHigh).toBeInTheDocument()

    fireEvent.click(buttonHigh)
    expect(onClickHigh).toHaveBeenCalledTimes(1)
  })

  test('キープレスでイベントが発火すること', () => {
    const onKeyPressHigh = jest.fn()
    const onKeyPressLow = jest.fn()

    const { getByText } = render(
      <HighAndLowButtons
        onClickLow={onKeyPressLow}
        onClickHigh={onKeyPressHigh}
      />
    )

    const buttonHigh = getByText('HIGH')
    const buttonLow = getByText('LOW')
    expect(buttonHigh).toBeInTheDocument()
    expect(buttonLow).toBeInTheDocument()

    fireEvent.keyDown(buttonHigh, { key: 'Enter' })
    fireEvent.keyDown(buttonLow, { key: 'Enter' })
    fireEvent.keyDown(buttonHigh, { key: 'h' })
    fireEvent.keyDown(buttonLow, { key: 'l' })
    expect(onKeyPressHigh).toHaveBeenCalledTimes(1)
    expect(onKeyPressLow).toHaveBeenCalledTimes(1)
  })
})
