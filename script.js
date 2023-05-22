//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	get name(){
		return this.name;
	}
	set name(name){
		this.name = name;
	}

	get age(){
		return this.age;
	}
	set age(age){
		this.age = age;	
	}
}

class Student extends Person {
	study(){
		console.log(this.name+" is studying")
	}
}

class Teacher extends Person {
	teach(){
		console.log(this.name+ " is teaching")
	}
}

pers = new Person("john", 23);
pers.name = "nadeem";
console.log(pers.name);

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;