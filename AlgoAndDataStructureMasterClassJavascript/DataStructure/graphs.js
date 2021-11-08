//Graphs 
//target what you like on netflix or target adds
//social networks 
//routing algorithms 
//visual hierarchie


//graph is a collection of nodes and connections of nodes

//types of graphs
//Vertex -> node 
//Edge -> connection between node 
//Weighted/Unweighted value saasigned to distances between vertices
//Directed/undirected directions assigned to distanced between vertices

//Storring graph
//Adjacency Matrix /list


class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    //Adding a vertex
//write a method called addVertex, wich
//accept a name of a vertex
//it should add a key to the adjacency list with the name of the vertex and set its value to be 
//an empty array
addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
}
//Adding Edge
//this function should accept two vertices,
//we can call them vertex1 and vertex2
//The function should find in the adjacency list the key of vertex and push vertex2
//to the array
//the function should find in adjacency list the key of vertex2 and push vertex1
//to the array
//no errors/invalid vertices
addEdge(v1,v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
 }
 //removing an edge
 //this function should accept two vertices, we'll
 //call them vertex1 and vertex2
 //the function should reassign the key of vertex1
 //to be an array that does not contain vertex2
 //The function should reassign the key of vertex2
 //to be an array that does not contain vertex1
 //no  handling errors/invalid vertices

 /// Arrow function
// filter((element) => { ... } )
// filter((element, index) => { ... } )
// filter((element, index, array) => { ... } )

//const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]



 removeEdge(vertex1,vertex2){
   this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
       v => v !== vertex2
   );
   this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
    v => v !== vertex1
   );
 }
 removeVertex(vertex){
     while(this.adjacencyList[vertex].length){
         const adjacentVertex = this.adjacencyList[vertex].pop();
         this.removeEdge(vertex, adjacentVertex)

     }
     delete this.adjacencyList[vertex]
 }
 depthFistRecursive(start){
     const result = [];
     const visited = {};
     const adjacencyList = this.adjacencyList;
        
     (function dfs(vertex){
         if(!vertex) return null;
         visited[vertex] = true;
         result.push(vertex);
         adjacencyList[vertex].forEach(neighbor => {
             if(!visited[neighbor]){
                 return dfs(neighbor)
             }
         } );
     })(start);
     return result;
 }
 dephFisrtIterative(start){
     const stack = [start];
     const result = [];
     const visited = {};
     let currentVertex;

     visited[start] = true;
     while(stack.length){
         currentVertex = stack.pop();
         result.push(currentVertex);

        //  forEach((element) => { ... } )
        //  forEach((element, index) => { ... } )
        //  forEach((element, index, array) => { ... } )
    //     const array1 = ['a', 'b', 'c'];

    //    array1.forEach(element => console.log(element));


         this.adjacencyList[currentVertex].forEach(neighbor => {
             if (!visited[neighbor]){
                 visited[neighbor] = true;
                 stack.push(neighbor)
             }
         }
            )
     }
     return result;
   }
   breadthFist(start){
       const queue = [start];
       const result = [];
       const visited = {};
       let currentVertex;
       visited[start] = true;


       while(queue.length){
           currentVertex = queue.shift();
           result.push(currentVertex);


           this.adjacencyList[currentVertex].forEach(neighbor =>{
               if(!visited[neighbor]){
                   visited[neighbor] = true;
                   queue.push(neighbor);
               }
           })
       }
       return result;
   }

}


let g = new Graph();
g.addVertex("Dallas");
g.addVertex("tokyo");
g.addVertex("aspen")



//Graph Traversal
//visiting/ Updating/checking each vertex in a graph

//Depth First Graph Traversal
//DSF
//if vertex is empty
//return (this is base case)
//add vertex to result list
//mark vertex as visited 
//for each neighbor in vertsex's neighbor's
//if neigbor is not visited:
//recursively call DFS on neighbor
