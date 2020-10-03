module.exports = function reverse (n) {
  return (Math.sign(n) === -1) ?
    n.toString().split('').splice(1).reverse().join('') :
    n.toString().split('').reverse().join('') * Math.sign(n);
}
