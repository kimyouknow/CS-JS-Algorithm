/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const answer = [];

  // // sol1
  // const travel = (node, i) => {
  //     if(!node) return
  //     if(answer[i] === undefined) answer[i] = []
  //     answer[i].push(node.val)
  //     travel(node.left, i+1)
  //     travel(node.right, i+1)
  // }

  // travel(root, 0)

  const queue = [[root, 0]];

  while (queue.length) {
    const [cur, i] = queue.shift();

    if (!cur) continue;
    if (answer[i] === undefined) answer[i] = [];
    answer[i].push(cur.val);
    queue.push([cur.left, i + 1]);
    queue.push([cur.right, i + 1]);
  }

  return answer;
};
