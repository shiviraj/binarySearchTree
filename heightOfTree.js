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

const maxHeight = (tree) => {
  if (!tree) return 0;
  const leftHeight = maxHeight(tree.left);
  const rightHeight = maxHeight(tree.right);
  return Math.max(leftHeight, rightHeight) + 1;
};

const main = () => {
  const a = [10, 5, 15, 3, 7, 12, 18, 2, 4, 6, 8, 11, 14, 16, 20];
  const tree = a.reduce(insertIntoTree, null);
  const leftHeight = maxHeight(tree.left);
  const rightHeight = maxHeight(tree);
  console.log(leftHeight, rightHeight);
};

main();
