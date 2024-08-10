# define a function that takes in a graph and two nodes as input, do a bi-directional depth-first search (BFS) from the start node to the end node.
def bfs_bidirectional(graph, start, end):
    # Create a dictionary to store the visited nodes and their predecessors in both directions
    visited_start = {start: None}
    visited_end = {end: None}

    # Create a queue for BFS from the start node
    queue_start = [(start, [])]
    queue_end = [(end, [])]

    # Perform BFS from both start and end nodes simultaneously
    while queue_start and queue_end:
        node_start, path_start = queue_start.pop(0)
        node_end, path_end = queue_end.pop(0)

        # If the current node is the end node, return the path
        if node_start == node_end:
            return path_start + path_end[::-1]

        # Add the current node to the visited nodes
        visited_start[node_start] = path_start

        # Add neighbors of the current node to the queue if they have not been visited yet
        for neighbor in graph[node_start]:
            if neighbor not in visited_start:
                queue_start.append((neighbor, path_start + [neighbor]))

        visited_end[node_end] = path_end

        for neighbor in graph[node_end]:
            if neighbor not in visited_end:
                queue_end.append((neighbor, path_end + [neighbor]))

    # If no path is found, return None
    return None

# Example usage
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

start = 'A'
end = 'C'

path = bfs_bidirectional(graph, start, end)
print(f"Shortest path from {start} to {end}: {path}")