import { renderHook, act } from '@testing-library/react'
import { useHighAndLow } from '../../src/hooks/useHighAndLow'
import { getRankNum } from '../../src/util'

const expectedDeckData = {
  suits: ['♠', '♣', '♦', '❤'],
  ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
}

describe('useHighAndLowe をテストします。', () => {
  test('初期ステートの確認', () => {
    const { result } = renderHook(() => useHighAndLow())

    expect(result.current[0].deck).toHaveLength(52)
    // suits * 4, ranks * 13 = 52 パターンをチェック
    // suit + rank が一致する要素を取り出し、一つしかないことを確認。
    // util.js の getDeck で同じテストを行っている。
    // getDeck を使用して初期化していればパスするはず。
    expectedDeckData.suits.forEach((suit) => {
      expectedDeckData.ranks.forEach((rank) => {
        const filteredItem = result.current[0].deck.filter(
          (a) => a.suit + a.rank === suit + rank
        )
        expect(filteredItem).toHaveLength(1)
      })
    })

    expect(result.current[0].firstCard).toBeNull()
    expect(result.current[0].secondCard).toBeNull()
    expect(result.current[0].isWin).toBeNull()
    expect(result.current[0].answered).toBeFalsy()
    expect(result.current[0].isGameStarted).toBeFalsy()
    expect(result.current[0].isGameFinished).toBeFalsy()
    expect(result.current[0].winCount).toBe(0)
    expect(result.current[0].loseCount).toBe(0)
  })

  test('ゲーム開始直後のステートの確認', () => {
    const { result } = renderHook(() => useHighAndLow())

    act(() => {
      result.current[1].startGame()
    })

    // ゲーム開始フラグ
    expect(result.current[0].isGameStarted).toBeTruthy()
    // 一枚目のカードはオープンカード
    // null でなく、想定データのいずれかの値がセットされていること
    expect(result.current[0].firstCard).not.toBeNull()
    expect(
      expectedDeckData.suits.includes(result.current[0].firstCard.suit)
    ).toBeTruthy()
    expect(
      expectedDeckData.ranks.includes(result.current[0].firstCard.rank)
    ).toBeTruthy()

    // 二枚目のカードはマスクカード
    // suit, rank ともに '?'
    expect(result.current[0].secondCard).not.toBeNull()
    expect(result.current[0].secondCard.suit).toBe('?')
    expect(result.current[0].secondCard.rank).toBe('?')

    // カードが一枚オープンしたので、デッキが一枚減っている
    expect(result.current[0].deck).toHaveLength(51)

    // メッセージが正しく出力されること
    expect(result.current[1].getMessage()).toBe('High or Low?')
  })

  test('LOW 選択後のステートの確認', () => {
    const { result } = renderHook(() => useHighAndLow())

    act(() => {
      result.current[1].startGame()
    })
    act(() => {
      // 0: LOW
      result.current[1].check(0)
    })

    // 二枚目のカードがオープンカードになっている
    // マスクカードでなく、想定データのいずれかの値がセットされていること
    expect(result.current[0].secondCard).not.toBeNull()
    expect(
      expectedDeckData.suits.includes(result.current[0].secondCard.suit)
    ).toBeTruthy()
    expect(
      expectedDeckData.ranks.includes(result.current[0].secondCard.rank)
    ).toBeTruthy()

    // 現在のステートで勝敗を判定
    // 判定のため、util.js の getRankNum を使用する（A を 1, K を 13 など変換する処理）。
    // この関数は別途テストする。
    const resultIsWin =
      getRankNum(result.current[0].firstCard.rank) >=
      getRankNum(result.current[0].secondCard.rank)
    // 想定勝敗と一致すること
    expect(result.current[0].isWin).toBe(resultIsWin)

    // 勝敗のカウントが期待通りカウントアップされていること
    const winCount = resultIsWin ? 1 : 0
    const loseCount = !resultIsWin ? 1 : 0
    expect(result.current[0].winCount).toBe(winCount)
    expect(result.current[0].loseCount).toBe(loseCount)

    // 回答したかどうかフラグが立っていること
    expect(result.current[0].answered).toBeTruthy()

    // カードが二枚オープンしたので、デッキが二枚減っている
    expect(result.current[0].deck).toHaveLength(50)

    // メッセージが正しく出力されること
    const expectedMessage = resultIsWin ? 'You Win!' : 'You Lose!'
    expect(result.current[1].getMessage()).toBe(expectedMessage)
  })

  test('HIGH 選択後のステートの確認', () => {
    const { result } = renderHook(() => useHighAndLow())

    act(() => {
      result.current[1].startGame()
    })
    act(() => {
      // 1: HIGH
      result.current[1].check(1)
    })

    // 二枚目のカードがオープンカードになっている
    // マスクカードでなく、想定データのいずれかの値がセットされていること
    expect(result.current[0].secondCard).not.toBeNull()
    expect(
      expectedDeckData.suits.includes(result.current[0].secondCard.suit)
    ).toBeTruthy()
    expect(
      expectedDeckData.ranks.includes(result.current[0].secondCard.rank)
    ).toBeTruthy()

    // 現在のステートで勝敗を判定
    // 判定のため、util.js の getRankNum を使用する（A を 1, K を 13 など変換する処理）。
    // この関数は別途テストする。
    const resultIsWin =
      getRankNum(result.current[0].firstCard.rank) <
      getRankNum(result.current[0].secondCard.rank)
    // 想定勝敗と一致すること
    expect(result.current[0].isWin).toBe(resultIsWin)

    // 勝敗のカウントが期待通りカウントアップされていること
    const winCount = resultIsWin ? 1 : 0
    const loseCount = !resultIsWin ? 1 : 0
    expect(result.current[0].winCount).toBe(winCount)
    expect(result.current[0].loseCount).toBe(loseCount)

    // 回答したかどうかフラグが立っていること
    expect(result.current[0].answered).toBeTruthy()

    // カードが二枚オープンしたので、デッキが二枚減っている
    expect(result.current[0].deck).toHaveLength(50)

    // メッセージが正しく出力されること
    const expectedMessage = resultIsWin ? 'You Win!' : 'You Lose!'
    expect(result.current[1].getMessage()).toBe(expectedMessage)
  })

  test('HIGH or LOW を選択後、次のターンに進んだ後のステートの確認', () => {
    const { result } = renderHook(() => useHighAndLow())

    act(() => {
      result.current[1].startGame()
    })
    act(() => {
      // 1: HIGH
      result.current[1].check(1)
    })

    // 次のターンでは、二枚目のカードがオープンカードになることを確認するため退避しておく。
    const secondCard = { ...result.current[0].secondCard }

    act(() => {
      result.current[1].next()
    })

    expect(result.current[0].firstCard.suit).toBe(secondCard.suit)
    expect(result.current[0].firstCard.rank).toBe(secondCard.rank)
    expect(result.current[0].secondCard.rank).toBe('?')
    expect(result.current[0].secondCard.rank).toBe('?')
    expect(result.current[0].answered).toBeFalsy()

    // メッセージが正しく出力されること
    expect(result.current[1].getMessage()).toBe('High or Low?')
  })

  test('ゲーム終了後のステート確認', () => {
    const { result } = renderHook(() => useHighAndLow())

    act(() => {
      result.current[1].startGame()
    })

    // デッキが0枚になるまで繰り返す。
    while (result.current[0].deck.length > 0) {
      act(() => {
        // 1: HIGH
        result.current[1].check(1)
      })
      act(() => {
        result.current[1].next()
      })
    }

    expect(result.current[0].isGameFinished).toBeTruthy()

    // メッセージが正しく出力されること
    expect(result.current[1].getMessage()).toBe('Thank you for playing!')

    // スコアが正しく表示されていること
    const scoreTextRegExp =
      /^Win: [0-9]|[1-4][0-9]|5[0-1] Lose: [0-9]|[1-4][0-9]|5[0-1]$/
    expect(scoreTextRegExp.test(result.current[1].getScore())).toBeTruthy()
  })
})
