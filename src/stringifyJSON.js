// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

    // declare variables
    var stringified;
    var objType;

    // determine object type
    // exclude undefined
    if (obj === undefined) return;

    if (obj === null)
        return 'null';
    else
        objType = typeof obj;

    // functions to be excluded
    if (objType == "function") return;

    // action items
    if (obj.constructor === Array) {

        // iterate over array
        for (var i=0;i<obj.length;i++) {
            obj[i] = stringifyJSON(obj[i]);
        }

        // return string of array
        stringified = "[" + obj + "]";

    } else if (obj.constructor === Object) {

        var objString = "";

        // empty objects
        if (Object.getOwnPropertyNames(obj).length === 0 ) {
            console.log("In if");
            stringified = "{}";
            return stringified;
        } else {

            var i = 0;

            // iterate over object
            for (var key in obj) {
                // exclude undefined and function key value pairs
                if (!(obj[key] === undefined || typeof obj[key] == "function")) {
                    // stringify object key value pair
                    obj[key] = '\"' + key + '\"' + ":" + stringifyJSON(obj[key]);

                    //add appropriate commas and semi-colons
                    if (i < 1) {
                        objString = objString + obj[key];
                    } else {
                        objString = objString + "," + obj[key];
                    }
                    i++;
                }
            }

            stringified = "{" + objString + "}";
        }
    } else if (objType === "string") {

        stringified = '\"'+ obj + '\"';

    } else {

        stringified = obj.toString();

    }

    return stringified;

};
