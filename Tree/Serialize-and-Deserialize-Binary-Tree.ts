/**
 * Hard - https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/** Solution 1 */
/*
 * Encodes a tree to a single string.
 */
const serialize = (root: TreeNode | null): string => {
  const res: string[] = [];
  const dfs = (node: TreeNode | null): void => {
    if (!node) {
      res.push('N');
      return;
    }
    res.push(node.val.toString());
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return res.join();
};

/*
 * Decodes your encoded data to tree.
 */
const deserialize = (data: string): TreeNode | null => {
  const vals = data.split(',');
  let i = 0;
  const dfs = (): TreeNode | null => {
    if (vals[i] === 'N') {
      i++;
      return null;
    }
    let node = new TreeNode(parseInt(vals[i]));
    i++;
    node.left = dfs();
    node.right = dfs();
    return node;
  };
  return dfs();
};

/** Solution 2: Using JSON.stringify and JSON.parse
 * const serialize = (root: TreeNode | null): string => JSON.stringify(root);
 * const deserialize = (data: string): TreeNode | null => JSON.parse(data);
 */

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
