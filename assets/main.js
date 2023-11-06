var people = [
  { name: "Rashad", surname: "Rufullayev", age: 19 },
  { name: "Alpay", surname: "Abdullayev", age: 20 },
  { name: "Ehmed", surname: "Osmanov", age: 20 },
  { name: "Pasa", surname: "Novruzov", age: 21 },
];

const table = document.getElementById("table");

for (let i = 0; i < people.length; i++) {
  var row = document.createElement("tr");

  var n = document.createElement("td");
  n.innerText = people[i].name;

  var s = document.createElement("td");
  s.innerText = people[i].surname;

  var a = document.createElement("td");
  a.innerText = people[i].age;

  row.appendChild(n);
  row.appendChild(s);
  row.appendChild(a);

  table.appendChild(row);
}
