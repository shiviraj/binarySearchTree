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

const printInOrder = (tree) => {
  if (tree == null) return;
  printInOrder(tree.left);
  console.log(tree.value);
  printInOrder(tree.right);
};

const isLeafNode = (node) => !node.left && !node.right;

const findNode = (tree, value, parent = null) => {
  if (!tree) return;
  if (tree.value == value) return { node: tree, parent };
  if (value < tree.value) return findNode(tree.left, value, tree);
  else return findNode(tree.right, value, tree);
};

const deleteLeafNode = (node, parent) => {
  if (node.value == parent.right.value) parent.right = null;
  else parent.left = null;
};

const isNodeHasOneChild = (node) => {
  return (
    (node.right == null && node.left != null) ||
    (node.right != null && node.left == null)
  );
};

const deleteNodeOfOneChild = (node, parent) => {
  if (parent.value < node.value)
    parent.right = node.right ? node.right : node.left;
  else parent.left = node.right ? node.right : node.left;
};

const findMinNode = (tree) => {
  if (tree.left == null) return tree;
  return findMinNode(tree.left);
};

let i = 0;

const deleteNode = (tree, value) => {
  if (!tree) return;
  const { node, parent } = findNode(tree, value);
  if (isLeafNode(node)) return deleteLeafNode(node, parent);
  if (isNodeHasOneChild(node)) return deleteNodeOfOneChild(node);
  const minNode = findMinNode(node.right);
  node.value = minNode.value;
  if (node.right.value == minNode.value) {
    node.right = null;
  } else {
    deleteNode(node.right, minNode.value);
  }
};

const main = () => {
  const a = [10, 5, 15, 3, 7, 12, 18, 2, 4, 6, 8, 11, 14, 16, 20];
  const tree = a.reduce(insertIntoTree, null);
  deleteNode(tree, 10);
  console.log(JSON.stringify(tree, null, 2));
};

main();
