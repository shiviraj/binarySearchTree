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

const isLeafNode = (node) => {
  return node.left == null && node.right == null;
};

const rightRotate = (tree, value) => {
  const { node } = findNode(tree, value);
  tree.left = node.right;
  node.right = tree;
  return node;
};

const leftRotate = (tree, value) => {
  const { node } = findNode(tree, value);
  tree.right = node.left;
  node.left = tree;
  return node;
};

const main = () => {
  const a = [10, 5, 20, 1, 8];
  let tree = a.reduce(insertIntoTree, null);
  tree = rightRotate(tree, 5);
  console.log(JSON.stringify(tree, null, 8));
  const a1 = [10, 5, 20, 15, 25];
  let tree1 = a1.reduce(insertIntoTree, null);
  tree1 = leftRotate(tree1, 20);
  console.log(JSON.stringify(tree1, null, 8));
};

main();
