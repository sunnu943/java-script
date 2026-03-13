const person={
    name:"suman",
    age:25,
    greet:function(){
        return 'hello,my name is${this.name}';
    },}
console.log(person.name);
console.log(person.greet());    