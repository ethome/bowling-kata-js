import BowlingGame from './BowlingGame'

describe('BowlingGame', () => {
  test('should score one roll', () => {
    const game = new BowlingGame()

    game.roll(3)

    expect(game.score()).toEqual(3)
  })

  test('should add 2 rolls together', () => {
    const game = new BowlingGame()
   
    game.roll(3)
    game.roll(2)

    expect(game.score()).toEqual(5)
  })

  test('spare should include value of next roll', () => {
    const game = new BowlingGame()

    game.roll(5)
    game.roll(5)
    game.roll(3)

    expect(game.score()).toEqual(16)
  })
})
