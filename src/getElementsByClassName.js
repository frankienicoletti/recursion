// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

    var bod = document.body;
    var cl = document.body.classList;
    var childs = document.body.children;
    //result array
    var nodeList = [];

    //check if class exists in class list
    var exists;
    for (var i=0;i<cl.length;i++) {
        exists = cl[i].search(className);
    }
    if (!exists) return;

    //debugger;

    //function that takes a node
    function getNodesByClassName (className, node) {
        var found;
        for (var i=0;i<node.length;i++) {
            found = node[i].search(className);
        }
        if (found)
            nodeList.push(node[i]);
        return nodeList;
    }
    console.log("about to run on class list");
    console.log(cl);
    console.log("This " + getNodesByClassName(className, cl));
    //if not found in class list
    if (getNodesByClassName(className, cl) == []) {
        console.log("Not in classlist");
        return;
    }
    console.log("ran on class list");

    getNodesByClassName(className, bod);
    getNodesByClassName(className, childs);

    console.log(nodeList);
    return nodeList;
};
