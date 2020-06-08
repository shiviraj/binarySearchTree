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

const storeNodes = (node, nodes) => {
  if (!node) return;
  node.left && storeNodes(node.left, nodes);
  nodes.push(node);
  node.right && storeNodes(node.right, nodes);
};

const buildTreeUtil = (nodes, start, end) => {
  if (start > end) return null;
  const mid = Math.floor((start + end) / 2);
  const node = nodes[mid];
  node.left = buildTreeUtil(nodes, start, mid - 1);
  node.right = buildTreeUtil(nodes, mid + 1, end);
  return node;
};

const balanceTree = (tree) => {
  const nodes = [];
  storeNodes(tree, nodes);
  return buildTreeUtil(nodes, 0, nodes.length - 1);
};

const main = () => {
  const a = [10, 2, 3, 7, 4, 6, 5, 15, 12, 11, 14, 16, 18, 8, 20];
  const tree = a.reduce(insertIntoTree, null);
  const balancedTree = balanceTree(tree);
  console.log(JSON.stringify(balancedTree, null, 2));
};

main();
