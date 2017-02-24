// object is to search an array and print out "Ben" using a "for loop"

var array1 = ["cats","pigs","rats","Ben","tomato"];
function findName(value){
for (var i=0; i<array1.length; i++) {
	if(value==array1[i]){
		console.log(value);
	}
	else {
		console.log('not here')
	}
	}
}