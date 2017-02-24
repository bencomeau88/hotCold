var names = ["Ben", "Ashley", "Bob","Jane","Toby","Bi"];
var compliment = " is stupendous! ";

function complimentGiver(array, words) {
	var completed = [];
	for (var i=0; i < array.length; i++) {
		completed.push(array[i] + words)
	}
	return completed;
}

console.log(complimentGiver(names,compliment));

var person = {
	name:"Benjamin",
	position:" seated ",
	where:"in a chair.",
	'88':" 1988, that is when you were born, right? ",
	sayHelloToBen:function(){
		console.log(" Hi " + person.name + " I see you are" + person.position + person.where + person[88])
	}
	// reset:function(){
	// 	person.name=0,
	// 	person.position=0,
	// 	person.where=0,
	// 	person[88]=0,
	// };
	
};
person.sayHelloToBen();

for(var prop in person){
	console.log(person[prop]);
}
// person.reset();