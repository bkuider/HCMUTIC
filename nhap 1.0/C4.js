graph.addVertex("c4-101");
graph.addVertex("c4-102");
graph.addVertex("c4-103");
graph.addVertex("c4-104");
graph.addVertex("c4-105");
graph.addVertex("c4-201");
graph.addVertex("c4-202");
graph.addVertex("c4-203");
graph.addVertex("c4-204");
graph.addVertex("c4-204.2");
graph.addVertex("c4-301");
graph.addVertex("c4-302");
graph.addVertex("c4-303");
graph.addVertex("c4-304");
graph.addVertex("c4-401");
graph.addVertex("c4-402");
graph.addVertex("c4-403");
graph.addVertex("c4-404");
graph.addVertex("c4-501");
graph.addVertex("c4-502");
graph.addVertex("c4-503");
graph.addVertex("c4-ls");
graph.addVertex("c4-rs");
graph.addVertex("c4-le");
graph.addVertex("c4-re");

//entrance
//ground
graph.addEdge("9d","c4-le",2);
graph.addEdge("10d","c4-re",3);

graph.addEdge("c4-le","c4-ls",1);
graph.addEdge("c4-ls","c4-101",1);
graph.addEdge("c4-le","c4-101",1);
graph.addEdge("c4-101","c4-102",1);
graph.addEdge("c4-102","c4-103",1);
graph.addEdge("c4-103","c4-104",1);
graph.addEdge("c4-104","c4-re",1);
graph.addEdge("c4-104","c4-rs",1);
graph.addEdge("c4-re","c4-rs",1);
graph.addEdge("c4-re","c4-105",2);
graph.addEdge("c4-rs","c4-105",2);

//floor2
graph.addEdge("c4-ls","c4-201",2);
graph.addEdge("c4-201","c4-202",1);
graph.addEdge("c4-202","c4-203",1);
graph.addEdge("c4-203","c4-204",1);
graph.addEdge("c4-204","c4-204.2",1);
graph.addEdge("c4-204.2","c4-rs",2);

//floor3
graph.addEdge("c4-ls","c4-301",3);
graph.addEdge("c4-301","c4-302",1);
graph.addEdge("c4-302","c4-303",1);
graph.addEdge("c4-303","c4-304",1);
graph.addEdge("c4-304","c4-rs",3);

//floor4
graph.addEdge("c4-ls","c4-401",4);
graph.addEdge("c4-401","c4-402",1);
graph.addEdge("c4-402","c4-403",1);
graph.addEdge("c4-403","c4-404",1);
graph.addEdge("c4-404","c4-rs",4);

//floor5
graph.addEdge("c4-ls","c4-501",5);
graph.addEdge("c4-501","c4-502",1);
graph.addEdge("c4-502","c4-503",1);
graph.addEdge("c4-503","c4-rs",5);