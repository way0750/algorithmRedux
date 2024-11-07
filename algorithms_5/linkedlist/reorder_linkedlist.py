class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reorder_list(head: ListNode) -> None:
    if not head or not head.next:
        return

    # Step 1: Find the middle of the linked list
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    # Step 2: Reverse the second half of the linked list
    prev, curr = None, slow
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp

    # Step 3: Merge the two halves
    first, second = head, prev
    while second.next:
        temp1, temp2 = first.next, second.next
        first.next = second
        second.next = temp1
        first = temp1
        second = temp2

# Helper function to convert linked list to a list of values
def linked_list_to_list(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

# Helper function to create a linked list from a list of values
def create_linked_list(lst):
    if not lst:
        return None
    head = ListNode(lst[0])
    current = head
    for value in lst[1:]:
        current.next = ListNode(value)
        current = current.next
    return head

# Test cases for Reorder Linked List
head1 = create_linked_list([1, 2, 3, 4])
reorder_list(head1)
assert linked_list_to_list(head1) == [1, 4, 2, 3]

head2 = create_linked_list([1, 2, 3, 4, 5])
reorder_list(head2)
assert linked_list_to_list(head2) == [1, 5, 2, 4, 3]

head3 = create_linked_list([1, 2])
reorder_list(head3)
assert linked_list_to_list(head3) == [1, 2]

head4 = create_linked_list([1])
reorder_list(head4)
assert linked_list_to_list(head4) == [1]

head5 = create_linked_list([])
reorder_list(head5)
assert linked_list_to_list(head5) == []

print("All test cases passed!")