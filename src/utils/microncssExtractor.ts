const microncssExtractor = (content: string) => content.match(/[A-z0-9-:/.]+/g)

export default microncssExtractor
