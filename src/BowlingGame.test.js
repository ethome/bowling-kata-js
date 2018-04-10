import BowlingGame from './BowlingGame'

describe('BowlingGame', () => {
  test('should score one roll', () => {
    const game = new BowlingGame()

    game.roll(3)

    expect(game.score()).toEqual(3)
  })
})
