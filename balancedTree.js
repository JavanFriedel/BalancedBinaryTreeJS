function Node(value, leftNode = null, rightNode = null) {
  return { value, leftNode, rightNode };
}

function buildTree(array) {
  let currentTree = {};

  // Iterate Over the Array
  // For each item in the array, traverse the current tree and find its place
  // If the value is less than the current node, traverse down the left list
  // If the value is greater than the current node, traverse down the right list
  // if you reach null, this is the end of the current branch
  // if you reach a number lower than the current number down the left list, replace it
  // if you reach a number greater than the current number down the right list, replace it

  // Somehow balance the tree either at the end or as I go
}

function Tree(initalArray) {
  let root = buildTree(initalArray);

  return { root };
}
