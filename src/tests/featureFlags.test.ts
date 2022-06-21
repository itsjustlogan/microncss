import executeMicroncss from '../index'

describe('executes correct feature', () => {
  it('executes init option.', () => {
    expect(executeMicroncss('init')).toBe('initialized')
  })
  it('executes production build option.', () => {
    expect(executeMicroncss('build')).toBe('built production')
  })
  it('executes watch option.', () => {
    expect(executeMicroncss('watch')).toBe('watching')
  })
  it('executes default', () => {
    expect(executeMicroncss('')).toBe('default rebuilding')
    expect(executeMicroncss(undefined)).toBe('default rebuilding')
  })
  it('catches invalid option', () => {
    expect(executeMicroncss('buld-producion')).toBe('invalid option')
  })
})
