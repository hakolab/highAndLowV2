import { render } from '@testing-library/react'
import Controller from '../../src/components/Controller'

describe('Controller コンポーネントのテスト', () => {
  test('ゲーム開始前は START ボタンが表示されていること', () => {
    const { getByText } = render(
      <Controller
        answered={false}
        isGameStarted={false}
        isGameFinished={false}
        startGame={() => {}}
        check={() => {}}
        next={() => {}}
        nextGame={() => {}}
      />
    )

    const startButton = getByText('START')
    expect(startButton).toBeInTheDocument()
  })

  test('ゲーム開始直後は HIGH ボタン、LOW ボタンが表示されていること', () => {
    const { getByText } = render(
      <Controller
        answered={false}
        isGameStarted
        isGameFinished={false}
        startGame={() => {}}
        check={() => {}}
        next={() => {}}
        nextGame={() => {}}
      />
    )

    const highButton = getByText('HIGH')
    expect(highButton).toBeInTheDocument()

    const lowButton = getByText('LOW')
    expect(lowButton).toBeInTheDocument()
  })

  test('HIGH or LOW の選択直後は NEXT ボタンが表示されていること', () => {
    const { getByText } = render(
      <Controller
        answered
        isGameStarted
        isGameFinished={false}
        startGame={() => {}}
        check={() => {}}
        next={() => {}}
        nextGame={() => {}}
      />
    )

    const nextButton = getByText('NEXT')
    expect(nextButton).toBeInTheDocument()
  })

  test('ゲームが終了したら NEXT GAME ボタンが表示されていること', () => {
    const { queryByText } = render(
      <Controller
        answered={false}
        isGameStarted
        isGameFinished
        startGame={() => {}}
        check={() => {}}
        next={() => {}}
        nextGame={() => {}}
      />
    )

    const highButton = queryByText('HIGH')
    expect(highButton).toBeNull()

    const lowButton = queryByText('LOW')
    expect(lowButton).toBeNull()

    const startButton = queryByText('START')
    expect(startButton).toBeNull()

    const nextButton = queryByText('NEXT')
    expect(nextButton).toBeNull()

    const nextGameButton = queryByText('NEXT GAME')
    expect(nextGameButton).toBeInTheDocument()
  })
})
