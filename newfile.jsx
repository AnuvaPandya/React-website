array = ["a", "b", "c", "d"];

function reverse(array) {
  var output = [];
  for (var i = 0; i <= array.length; i++) {
    output.push(array.pop());
  }
  return output;
}
console.log(reverse([array]));
