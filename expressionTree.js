class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function evaluateExpressionTree(tree) {
    if (tree.value >= 0) 
        return tree.value;
    
    if (tree.value == -1) 
        return evaluateExpressionTree(tree.left) + evaluateExpressionTree(tree.right);
    
    if (tree.value == -2) 
        return evaluateExpressionTree(tree.left) - evaluateExpressionTree(tree.right);
    
    if (tree.value == -3) 
        return Math.trunc(evaluateExpressionTree(tree.left) / evaluateExpressionTree(tree.right));
    
    if (tree.value == -4) 
        return evaluateExpressionTree(tree.left) * evaluateExpressionTree(tree.right);
    
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.evaluateExpressionTree = evaluateExpressionTree;
