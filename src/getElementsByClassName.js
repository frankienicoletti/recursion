// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

    //result array
    var results = [];

    function recursiveFunction (className,parent) {
        if (parent.classList && parent.classList.contains(className)) {
            results.push(parent);
        }

        if (parent.hasChildNodes()) {
            for (var i = 0; i<parent.childNodes.length;i++) {
                recursiveFunction(className,parent.childNodes[i]);
            }
        }

    }

    recursiveFunction(className,document.body);
    return results;
    

};
