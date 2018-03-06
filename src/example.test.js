import sayHello from './example'

describe('example', () => {
  test('should say hello', () => {
    const response = sayHello('Rambo')

    expect(response).toEqual('Hello Rambo!')
  })
})
