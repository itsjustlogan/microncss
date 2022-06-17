import executeMicroncss from '../index'

function addOne(num: number) {
  return num + 1
}

describe('My addition function', () => {
  it('adds 1 to input value', () => {
    expect(addOne(2)).toBe(3)
  })
})

describe('executes correct feature', () => {
  it('initializes the program.', () => {
    expect(executeMicroncss('init')).toBe('initialized')
  })
  it('creates a production build.', () => {
    expect(executeMicroncss('build')).toBe('built production')
  })
  it('watches for changes.', () => {
    expect(executeMicroncss('watch')).toBe('watching')
  })
  it('rebuilds styles', () => {
    expect(executeMicroncss('')).toBe('default rebuilding')
    expect(executeMicroncss(undefined)).toBe('default rebuilding')
  })
  it('catches invalid option', () => {
    expect(executeMicroncss('buld-producion')).toBe('invalid option')
  })
})
