let person = `{
    "name": "Aleix Melon",
    "id" : "E00245",
    "role": ["Dev", "DBA"],
    "age" : 23,
    "doj" : "11-12-2019",
    "married" : false,
    "address":{
      "street": "32, Laham st.",
      "city": "Innsbruck",
      "coumtry" : "Austria"
    },
    "referred-by" : "E0012"
} `;

console.log();
console.log("Convert JSON object to Object");
let person1 = JSON.parse(person);
console.log(person1);
console.log();

console.log("Log 'DEV' on console");
process.stdout.write(`-> `);
console.log(person1.role[0]);
console.log();

console.log("Log 'Melon' on console");
process.stdout.write(`-> `);
let lastName = person1.name.split(" ");
console.log(lastName[1]);
console.log();

console.log("Log only joining year of employee on console");
process.stdout.write(`-> `);
let year = person1.doj.split("-");
console.log(year[2]);
console.log();