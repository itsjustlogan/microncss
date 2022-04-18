const parseDate = () => {
  const d = new Date()
  return d.toLocaleTimeString().toUpperCase().replace(/\./g, '')
}

export default parseDate
