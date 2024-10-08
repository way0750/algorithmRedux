"""
Challenge 1: Implement a Singly Linked List

Description:
Implement a singly linked list with the following operations:
1. Insert a node at the beginning.
2. Insert a node at the end.
3. Delete a node by value.
4. Search for a node by value.

Function Signatures:
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class LinkedList:
    def __init__(self):
        pass

    def insert_at_beginning(self, val: int) -> None:
        pass

    def insert_at_end(self, val: int) -> None:
        pass

    def delete_by_value(self, val: int) -> None:
        pass

    def search(self, val: int) -> bool:
        pass
"""

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert_at_beginning(self, val: int) -> None:
        new_head = ListNode(val)
        if not self.head:
            self.head = new_head
            self.tail = new_head
        else:
            new_head.next = self.head
            self.head = new_head

    def insert_at_end(self, val: int) -> None:
        if not self.tail:
            self.insert_at_beginning(val)
        else:
            new_tail = ListNode(val)
            self.tail.next = new_tail
            self.tail = new_tail

    def delete_by_value(self, val: int) -> None:
        pre_node = None
        cur_node = self.head
        while cur_node:
            # list is empty: nothing needs to be done
            # del first node
            # del last node
            # del any node in between
            # list has only one node: pre and .next are both None
            if cur_node.val != val:
                pre_node = cur_node
                cur_node = cur_node.next
                continue

            if self.head == self.tail:
                self.head = None
                self.tail = None
            elif pre_node == None: # deleting the head
                new_head = self.head.next
                self.head.next = None
                self.head = new_head
            elif not cur_node.next: # deleting the tail
                self.tail = pre_node
            else:
                pre_node.next = cur_node.next
                cur_node.next = None
            return


    def search(self, val: int) -> bool:
        cur_node = self.head
        while cur_node:
            if val == cur_node.val:
                return True
            else:
                cur_node = cur_node.next
        return False

"""
Challenge 2: Reverse a Singly Linked List

Description:
Given the head of a singly linked list, reverse the list and return the new head.

Example:
- Input: 1 -> 2 -> 3 -> 4 -> 5
- Output: 5 -> 4 -> 3 -> 2 -> 1

Function Signature:
def reverse_list(head: ListNode) -> ListNode:
    pass
"""

def reverse_list(head: ListNode) -> ListNode:
    head
    pre_node = None
    while head:
        next = head.next
        head.next = pre_node
        pre_node = head
        head = next
    return pre_node


"""
Challenge 3: Detect a Cycle in a Linked List

Description:
Given the head of a linked list, determine if the list has a cycle in it.

Example:
- Input: 3 -> 2 -> 0 -> -4 (tail connects to node index 1)
- Output: True (the cycle is detected)

Function Signature:
def has_cycle(head: ListNode) -> bool:
    pass
"""

def has_cycle(head: ListNode) -> bool:
    if not head or not head.next:
        return False
    slow = head
    fast = slow.next
    while fast:
        if slow == fast:
            return True
        else:
            slow = slow.next
            fast = fast.next and fast.next.next
    return False

"""
Challenge 4: Find the Middle of a Linked List

Description:
Given the head of a singly linked list, find the middle node of the list. If there are two middle nodes, return the second one.

Example:
- Input: 1 -> 2 -> 3 -> 4 -> 5
- Output: 3

- Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6
- Output: 4

Function Signature:
def middle_node(head: ListNode) -> ListNode:
    pass
"""

def middle_node(head: ListNode) -> ListNode:
    if not head or not head.next:
        return head
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow

"""
Challenge 5: Merge Two Sorted Linked Lists

Description:
Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example:
- Input: 1 -> 2 -> 4, 1 -> 3 -> 4
- Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

Function Signature:
def merge_two_lists(l1: ListNode, l2: ListNode) -> ListNode:
    pass
    
let head and tail to be None at first
curNode1 for current node at list 1
curNode2 for current node at list 2
loop through both list
add the smallest node to the head/tail

return head
O(l1 + l2)
O(l1 + l2)
"""

def merge_two_lists(l1: ListNode, l2: ListNode) -> ListNode:
    head = None
    tail = None
    node1 = l1
    node2 = l2
    while node1 or node2:
        small = None
        if not node2 or node1.val < node2.val:
            small = node1
            node1 = node1.next
        else:
            small = node2
            node2 = node2.next
        
        if not head:
            head = small
            tail = small
        else:
            tail.next = small
            tail = tail.next
    return head


"""
Challenge 6: Remove N-th Node From End of List

Description:
Given the head of a linked list, remove the n-th node from the end of the list and return its head.

Example:
- Input: 1 -> 2 -> 3 -> 4 -> 5, n = 2
- Output: 1 -> 2 -> 3 -> 5

Function Signature:
def remove_nth_from_end(head: ListNode, n: int) -> ListNode:
    pass

    similar to slow and fast technique
    make the fast one go further, then by the the time the fast one hit None
    then the slow one should be the target to be deleted

"""

def remove_nth_from_end(head: ListNode, n: int) -> ListNode:
    pass

"""
Challenge 7: Delete a Node in a Linked List

Description:
Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Example:
- Input: head = [4,5,1,9], node = 5
- Output: [4,1,9]

Function Signature:
def delete_node(node: ListNode) -> None:
    pass
"""

def delete_node(node: ListNode) -> None:
    if node.next:
        next_node = node.next.next
        node.val = node.next.val
        node.next.next = None
        node.next = next_node

"""
Helper Functions for Testing
"""

# Convert linked list to a list of values
def linked_list_to_list(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

# Create a linked list from a list of values
def create_linked_list(lst):
    if not lst:
        return None
    head = ListNode(lst[0])
    current = head
    for value in lst[1:]:
        current.next = ListNode(value)
        current = current.next
    return head

# Test cases for all challenges
def test_linked_list_operations():
    ll = LinkedList()
    ll.insert_at_beginning(3)
    ll.insert_at_beginning(2)
    ll.insert_at_beginning(1)
    assert linked_list_to_list(ll.head) == [1, 2, 3]
    ll.insert_at_end(4)
    assert linked_list_to_list(ll.head) == [1, 2, 3, 4]
    ll.delete_by_value(3)
    assert linked_list_to_list(ll.head) == [1, 2, 4]
    ll.delete_by_value(1)
    assert linked_list_to_list(ll.head) == [2, 4]

def test_reverse_list():
    head = create_linked_list([1, 2, 3, 4, 5])
    reversed_head = reverse_list(head)
    assert linked_list_to_list(reversed_head) == [5, 4, 3, 2, 1]

def test_has_cycle():
    head = create_linked_list([3, 2, 0, -4])
    head.next.next.next.next = head.next  # Create a cycle
    assert has_cycle(head) == True

    head = create_linked_list([1, 2])
    assert has_cycle(head) == False

def test_middle_node():
    head = create_linked_list([1, 2, 3, 4, 5])
    assert linked_list_to_list(middle_node(head)) == [3, 4, 5]

    head = create_linked_list([1, 2, 3, 4, 5, 6])
    assert linked_list_to_list(middle_node(head)) == [4, 5, 6]

def test_merge_two_lists():
    l1 = create_linked_list([1, 2, 4])
    l2 = create_linked_list([1, 3, 4])
    merged_head = merge_two_lists(l1, l2)
    assert linked_list_to_list(merged_head) == [1, 1, 2, 3, 4, 4]

# def test_remove_nth_from_end():
#     head = create_linked_list([1, 2, 3, 4, 5])
#     new_head = remove_nth_from_end(head, 2)
#     assert linked_list_to_list(new_head) == [1, 2, 3, 5]

def test_delete_node():
    head = create_linked_list([4, 5, 1, 9])
    node_to_delete = head.next  # Node with value 5
    delete_node(node_to_delete)
    assert linked_list_to_list(head) == [4, 1, 9]

def run_all_tests():
    test_linked_list_operations()
    test_reverse_list()
    test_has_cycle()
    test_middle_node()
    test_merge_two_lists()
    # test_remove_nth_from_end()
    test_delete_node()
    print("All test cases passed!")

run_all_tests()