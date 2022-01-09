/**
 * Easy - https://leetcode.com/problems/n-ary-tree-preorder-traversal/
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

const preorder = (root: Node | null): number[] => {
  const dfs = (node: Node | null, res: number[]): number[] => {
    if (!node) return res;
    res.push(node.val);
    for (let i = 0; i < node.children.length; i++) {
      dfs(node.children[i], res);
    }
    return res;
  };
  return dfs(root, []);
};
