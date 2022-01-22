/**
 * Easy - https://leetcode.com/problems/n-ary-tree-postorder-traversal/
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

const postorder = (root: Node | null): number[] => {
  const dfs = (node: Node | null, res: number[]): number[] => {
    if (!node) return res;
    for (let i = 0; i < node.children.length; i++) {
      dfs(node.children[i], res);
    }
    res.push(node.val);
    return res;
  };
  return dfs(root, []);
};
