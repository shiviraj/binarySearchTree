const createTree = (value) => ({ value, left: null, right: null });

const insertIntoTree = (tree, value) => {
  if (tree == null) return createTree(value);
  if (value < tree.value) {
    tree.left = insertIntoTree(tree.left, value);
  } else {
    tree.right = insertIntoTree(tree.right, value);
  }
  return tree;
};

const findNode = (tree, value, parent = null) => {
  if (tree == null) return null;
  if (tree.value == value) return { node: tree, parent };
  if (value < tree.value) return findNode(tree.left, value, tree);
  else return findNode(tree.right, value, tree);
};

const rightRotate = (tree, value) => {
  const { node, parent } = findNode(tree, value);
  const grandParent = findNode(tree, parent.value).parent;
  if (parent.left.value != node.value) return tree;
  parent.left = node.right;
  node.right = parent;
  if (grandParent == null) return node;
  if (grandParent.right && grandParent.right.value == parent.value)
    grandParent.right = node;
  else grandParent.left = node;
  return tree;
};

const leftRotate = (tree, value) => {
  const { node, parent } = findNode(tree, value);
  const grandParent = findNode(tree, parent.value).parent;
  if (parent.right.value != node.value) return tree;
  parent.right = node.right;
  node.left = parent;
  if (grandParent == null) return node;
  if (grandParent.left && grandParent.left.value == parent.value)
    grandParent.left = node;
  else grandParent.right = node;
  return tree;
};

const main = () => {
  const a = [10, 5, 15, 3, 7, 12, 18, 2, 4, 6, 8, 11, 14, 16, 20];
  let tree = a.reduce(insertIntoTree, null);
  tree = leftRotate(tree, 15);
  console.log(JSON.stringify(tree, null, 2));
};

main();
