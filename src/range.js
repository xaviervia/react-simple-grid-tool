export default (from, to) => {
  var result = []
  var n = from
  while (n < to) {
    result.push(n)
    n += 1
  }
  return result
}
