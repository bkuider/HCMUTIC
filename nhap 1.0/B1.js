graph.addVertex("b1-102");
graph.addVertex("b1-103");
graph.addVertex("b1-104");
graph.addVertex("b1-105");
graph.addVertex("b1-106");
graph.addVertex("b1-108");
graph.addVertex("b1-109");
graph.addVertex("b1-110");
graph.addVertex("b1-111");
graph.addVertex("b1-112");
graph.addVertex("b1-114");
graph.addVertex("b1-115");
graph.addVertex("b1-116");
graph.addVertex("b1-118");
graph.addVertex("b1-119");
graph.addVertex("b1-200");
graph.addVertex("b1-201");
graph.addVertex("b1-202");
graph.addVertex("b1-203");
graph.addVertex("b1-204");
graph.addVertex("b1-205");
graph.addVertex("b1-206");
graph.addVertex("b1-207");
graph.addVertex("b1-208");
graph.addVertex("b1-209");
graph.addVertex("b1-210");
graph.addVertex("b1-211");
graph.addVertex("b1-212");
graph.addVertex("b1-213");
graph.addVertex("b1-214");
graph.addVertex("b1-215");
graph.addVertex("b1-300a");
graph.addVertex("b1-300b");
graph.addVertex("b1-301");
graph.addVertex("b1-302");
graph.addVertex("b1-303");
graph.addVertex("b1-305");
graph.addVertex("b1-306");
graph.addVertex("b1-307");
graph.addVertex("b1-308");
graph.addVertex("b1-309");
graph.addVertex("b1-310");
graph.addVertex("b1-311");
graph.addVertex("b1-312");
graph.addVertex("b1-313");
graph.addVertex("b1-314");
graph.addVertex("b1-315");
graph.addVertex("b1-ls");
graph.addVertex("b1-rs");
//graph.addVertex("b1-yard");

//entranceground
graph.addEdge("1b","b1-108",2);
graph.addEdge("1b","b1-106",3);
graph.addEdge("1b","b1-ls",2);
graph.addEdge("2c","b1-rs",5);
//leftside
graph.addEdge("b1-ls","b1-108",2);
graph.addEdge("b1-ls","b1-106",2);
graph.addEdge("b1-106","b1-105",1);
graph.addEdge("b1-105","b1-104",1);
graph.addEdge("b1-104","b1-103",1);
graph.addEdge("b1-103","b1-102",1);
graph.addEdge("b1-108","b1-109",1);
graph.addEdge("b1-109","b1-110",1);
graph.addEdge("b1-110","b1-111",1);
graph.addEdge("b1-111","b1-112",1);
//rightside
graph.addEdge("b1-rs","b1-112",1);
graph.addEdge("b1-rs","b1-114",1);
graph.addEdge("b1-114","b1-119",1);
graph.addEdge("b1-119","b1-116",1);
graph.addEdge("b1-116","b1-115",1);
graph.addEdge("b1-115","b1-118",1);
//floor2
//leftside
graph.addEdge("b1-ls","b1-206",2);
graph.addEdge("b1-ls","b1-204",2);
graph.addEdge("b1-204","b1-205",1);
graph.addEdge("b1-204","b1-203",1);
graph.addEdge("b1-203","b1-202",1);
graph.addEdge("b1-202","b1-201",1);
graph.addEdge("b1-201","b1-200",1);
graph.addEdge("b1-206","b1-207",1);
graph.addEdge("b1-207","b1-208",1);
//rightside
graph.addEdge("b1-rs","b1-208",2);
graph.addEdge("b1-rs","b1-209",2);
graph.addEdge("b1-209","b1-210",1);
graph.addEdge("b1-210","b1-211",1);
graph.addEdge("b1-211","b1-212",1);
graph.addEdge("b1-212","b1-213",1);
graph.addEdge("b1-213","b1-214",1);
graph.addEdge("b1-214","b1-215",1);
//floor3
//leftside
graph.addEdge("b1-ls","b1-305",4);
graph.addEdge("b1-ls","b1-303",4);
graph.addEdge("b1-305","b1-303",1);
graph.addEdge("b1-303","b1-302",1);
graph.addEdge("b1-302","b1-301",1);
graph.addEdge("b1-301","b1-300a",1);
graph.addEdge("b1-300a","b1-300b",1);
graph.addEdge("b1-305","b1-306",1);
graph.addEdge("b1-306","b1-307",1);
//rightside
graph.addEdge("b1-rs","b1-307",4);
graph.addEdge("b1-rs","b1-308",4);
graph.addEdge("b1-308","b1-309",1);
graph.addEdge("b1-309","b1-310",1);
graph.addEdge("b1-310","b1-311",1);
graph.addEdge("b1-311","b1-312",1);
graph.addEdge("b1-312","b1-313",1);
graph.addEdge("b1-313","b1-314",1);
graph.addEdge("b1-314","b1-315",1);