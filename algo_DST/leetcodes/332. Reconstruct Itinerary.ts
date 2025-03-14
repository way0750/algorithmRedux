/**
 * @param {string[][]} tickets
 * @return {string[]}
 graph:
 {
    SFO: { indegrees: 2, to: { ATL: 2, JFK: 1 } }
    // means two tickets from SFO to ATL and 1 ticket SFO to JFK
    // this is to keep track of how many tickets are there to go to certain airport
    // indegrees indicates how many incoming flights are there
    // will be useful to find a starting airport
 }

sort air ports by their indegrees and then by their lexical order
then do a comprehensive back-tracking search
    the depth will be === tickets.length
    if the search can use up all the tickets then we have found a valid combo
        else back track and find another one
might need to use recursion
    return [] of a valid path
    or null for no path found, so should find another one
to maintain lexical order
    should always choose smaller lexical airport first

for the recursion:
base case:
    if depth === tickets.length
        return [ending airport] // starting to collection airports from this one valid path
what to always return:
    either array or null: valid path or no path
what to do with return:
    if array:
        stop everything and put current airport in front the array
    if null:
        increase the ticket of the current destination airport ticket by 1
            and move on to search the next destination airport

how to make problem smaller:
    go through the next airports by lexical order, one by one
        for each each, reduce the ticket count by 1 to that airport
        keeping track of tickets can already handle the indegrees

    for the recursion always default return null
 */
    var findItinerary = function(tickets) {
        const graph = {};
        const indegrees = {}
        for (let [from, to] of tickets) {
          graph[from] = graph[from] || {};
          graph[to] = graph[to] || {};
      
          graph[from][to] = (graph[from][to] || 0) + 1;
      
          indegrees[from] = indegrees[from] || 0;
          indegrees[to] = (indegrees[to] || 0) + 1;
        }
      
        const airports = Object.keys(graph).sort(); //. lexical sorted
        const dfs = (airport, depth) => {
          if (depth === tickets.length) return [airport];
      
          for (let toAirport of airports) {
              if (!graph[airport][toAirport]) continue;
              graph[airport][toAirport]--; // use the ticket
              const validPath = dfs(toAirport, depth + 1);
              if (validPath) {
                  validPath.unshift(airport);
                  return validPath
              } else {
                  graph[airport][toAirport]++; // add the ticket back
              }
          }
          return null;
        }
      
        const minDegree = Math.min(...Object.values(indegrees));
      
        return dfs('JFK', 0);
      };