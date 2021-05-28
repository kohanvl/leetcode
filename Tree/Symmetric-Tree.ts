/**
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

const isSymmetric = (root: TreeNode | null): boolean => {
  return checkSymmetry(root.left, root.right);
};

const checkSymmetry = (
  rootL: TreeNode | null,
  rootR: TreeNode | null,
): boolean => {
  if (!rootL && !rootR) return true;
  else if (!rootL || !rootR) return false;
  return (
    rootL.val === rootR &&
    checkSymmetry(rootL.left, rootR.right) &&
    checkSymmetry(rootL.right, rootR.left)
  );
};
