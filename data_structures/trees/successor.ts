import { BinarySearchTree, BinaryTree } from "./binaryTree";

/**
 * Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a
 * binary search tree. You may assume that each node has a link to its parent.
 * 
 * the next parent node. essentially it is the first node on the current node's left:
 * it could be it's right child/sub tree's further LEFT node
 * or if it has no right descendence, get it first parent that is on the right side
 * 
 * solution 1:
 * if given node has the right child, then find the leftest child on that sub tree
 * if given node has no right child, then find the parent that is the first on
 * the top tree's right
 * 
 * time and space:
 * we will go up and down on the tree
 * worst time complexity would be the depth, so if N === total amount of nodes,
 * the logN
 * 
 * space, we will just maintain a handful a state, so constant.
 */

function getFurthestLeftChild(tree: BinaryTree) {
  let curLeft = tree;
  let nextLeft = tree.leftChild;
  while(nextLeft) {
    curLeft = nextLeft;
    nextLeft = curLeft.leftChild;
  }

  return curLeft;
}

function getFurthestRightParent(tree: BinaryTree) {
  let curNode = tree;
  let curParent = tree.parent;
  while (curParent) {
    //if current node is the leftChild of the parent
    if (curNode === curParent.leftChild) {
      return curNode;
    } else {
      curNode = curParent;
      curParent = curNode.parent;
    }
  }

  return null;
}

export function successor (tree: BinarySearchTree) {
  if (tree.leftChild) {
    return getFurthestLeftChild(tree.leftChild);
  } else {
    return getFurthestRightParent(tree);
  }
}
