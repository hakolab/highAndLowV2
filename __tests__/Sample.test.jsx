import { render, screen, fireEvent } from '@testing-library/react'
import Sample from '../src/components/Sample'

describe('Sample コンポーネントをテストします。', () => {
  test('「Hello jest. This is a Sample.」が表示されていることをチェックします。', () => {
    render(<Sample onClick={() => console.log('no operation')} />)
    // console.log(screen.getByText('Hello jest. This is a Sample.'))
    expect(
      screen.getByText('Hello jest. This is a Sample.')
    ).toBeInTheDocument()
  })

  test('ボタンのラベルが「Sample button」であることをチェックします。。', () => {
    const onClick = jest.fn()

    const { getByText } = render(<Sample onClick={onClick} />)

    const button = getByText('Sample button')
    // console.log(screen.getByText('Hello jest. This is a Sample.'))
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
