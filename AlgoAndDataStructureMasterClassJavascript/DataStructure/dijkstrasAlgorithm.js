//use gps fatest route
//networking Routing shortest path
//model the spread of virus
//finding cheapest flying routes...
class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
        //O(N * log N) sort
    }
}

class WeightedGraph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2, weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    //Every time we look to visit a new node, we pick the node with the 
    //samllest known distance to visit first.

    //Once we've moved to the node we 're going to visit, we look at each of its neighbors

    //For each neighboring node, we calculate the diatance by summing the total edges that lead to
    //the node we 're checking from the starting node.

    //if the new total distance to a node is less
    //than the previous total, we staore the new shorter distance for that node.
    Dijkstra(start, finish){
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;
    for(let vertex in this.adjacencyList){
        if(vertex === start){
            distances[vertex] = 0;
            nodes.enqueue(vertex, 0);
        }else{
            distances[vertex] = Infinity;
            nodes.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
    }
    while(nodes.values.length){
        smallest = nodes.dequeue().val;
        if (smallest === finish){
            while(previous[smallest]){
                path.push(smallest);

            }
            break;
        }
        if(smallest || distances[smallest] !== Infinity){
            for(let neighbor in  this.adjacencyList[smallest]){
                let nextNode = this.adjacencyList[smallest][neighbor];
                let candidate  = distances[smallest] + nextNode.weight;
                let nextNeighbor = nextNode.node;
                if(candidate < distances[nextNeighbor]){
                    distances[nextNeighbor] = candidate;
                previous[nextNeighbor] = smallest;
                nodes.enqueue(nextNeighbor,candidate);
                }
            }
        }
    }
    return path.concat(smallest).reverse();
    }
}


var graph = new WeightedGraph()

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.Dijkstra("A", "E");

// ["A", "C", "D", "F", "E"]


