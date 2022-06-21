import StyleBuilder from '../modules/styleBuilder'

describe('stylebuilder class functionality', () => {
  const testStyles = new StyleBuilder('production', 'done in')

  test('style builder creates classes correctly', () => {
    expect(testStyles).toBeTruthy()
  })

  test('sets builder option', () => {
    expect(testStyles.builderOption).toBe('production')
  })

  test('sets msg', () => {
    expect(testStyles.msg).toBe('done in')
  })
})
