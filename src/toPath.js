export default points => `M${points.map(point => point.join(' ')).join(' ')}`
