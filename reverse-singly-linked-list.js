/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let node = head;
    let newHead = null;
    let tempNode;

    while (node !== null) {
        if (newHead === null) {
            newHead = new ListNode(node.val);
        }

        else {
            tempNode = new ListNode(node.val, newHead);
            newHead = tempNode;
        }

        node = node.next;
    }

    return newHead;
};