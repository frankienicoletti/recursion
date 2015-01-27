// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

    /*console.log(obj);
    var stringifyJSON = JSON.stringify(obj);
    console.log(stringifyJSON);
    return stringifyJSON;*/

    var stringified;
    var objType;

    if (obj === undefined) {
        objType = undefined;
    } else if (obj === 'undefined') {
        objType = undefined;
    } else if (obj === function(){}) {
        objType = undefined;
    } else if (obj === 'function..') {
        objType = undefined;
    } else if (obj === null) {
        objType = null;
    } else {
        objType = typeof obj;
    }
    console.log(obj);
    console.log(objType);

    if (objType === undefined) {
        stringified = "";
    } else if (objType === null) {
        stringified = 'null';
    } else if (obj.constructor === Array) {
        for (var i=0;i<obj.length;i++) {
            obj[i] = stringifyJSON(obj[i]);
        }
        stringified = "[" + obj + "]";
    } else if (obj.constructor === Object) {
        console.log("This is an Object");
         var objString = "";
        if (Object.getOwnPropertyNames(obj).length === 0 ) {
            console.log("In if");
            stringified = "{}";
            return stringified;
        } else {
            var i = 0;
            for (var key in obj) {

                console.log(obj[key]);


                if (key === undefined || key == 'function..') {
                        key = "";
                        obj[key] = "";
                } else {

                    obj[key] = '\"' + key + '\"' + ":" + stringifyJSON(obj[key]);

                    if (i < 1) {
                        objString = objString + obj[key];
                    } else {
                        objString = objString + "," + obj[key];
                    }
                    i++;
                }

                console.log(obj[key]);
            }
            stringified = "{" + objString + "}";
        }
        console.log(stringified);
    } else if (objType === "string") {
        stringified = '\"'+ obj + '\"';
    } else {
        stringified = obj.toString();
    }

    console.log("RESULT: " + stringified);
    return stringified;

};
