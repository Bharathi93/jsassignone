var myObj = [5,[22],[[14]],[[4]],[5,6]];
console.log("The nested array is..");
console.log(myObj);
var myfirstObj=[].concat.apply([],myObj);
var mynewObj=[].concat.apply([],myfirstObj);
console.log("The flattened array is..");
console.log(mynewObj);
