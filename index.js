var smrutiranjan = new Array();

// Prototype of member object
class member {
  constructor(name, expenses) {
    this.name = name;
    this.expenses = expenses;
  }
}

// Checking user is unique or not
function isUnique(tripname, name) {
  return tripname.some(function (el) {
    return el.name === name;
  });
}

// Adding member function
function addmember(tripname, name, expenses) {
  if (!isUnique(tripname, name)) {
    const members = new member(name, expenses);
    console.log(members);
    tripname.push(members);
  } else {
    console.log("Invalid Member");
  }
}

function addExpenses(tripname, name, expenses) {
  for (let i = 0; i < tripname.length; i++) {
    if (tripname[i].name === name) {
      tripname[i].expenses += expenses;
    }
  }
}

function main(cb, name, expenses) {
  cb(smrutiranjan, name, expenses);
}

// Members
main(addmember, "Amar", 0);
main(addmember, "Akbar", 0);
main(addmember, "Anthony", 0);

// Expenses
main(addExpenses, "Amar", 20);
main(addExpenses, "Akbar", 20);
main(addExpenses, "Anthony", 30);

function split(tripname) {
  let peoples = [];
  let expenses = [];

  for (let i = 0; i < tripname.length; i++) {
    peoples.push(tripname[i].name);
    expenses.push(tripname[i].expenses);
  }
  const Total_expenses = expenses.reduce((acc, curr) => curr + acc);
  const average_expenses = Total_expenses / peoples.length;
  if (expenses[0] < average_expenses) {
    let money = average_expenses - expenses[0];
    let user = expenses.indexOf(average_expenses + money);
    console.log(`${peoples[0]} have to pay ${peoples[user]} ₹ ${money} `);
  } else if (expenses[1] < average_expenses) {
    let money = average_expenses - expenses[1];
    let user = expenses.indexOf(average_expenses + money);
    console.log(`${peoples[1]} have to pay ${peoples[user]} ₹ ${money} `);
  } else if (expenses[2] < average_expenses) {
    let money = average_expenses - expenses[2];
    let user = expenses.indexOf(average_expenses + money);
    console.log(`${peoples[0]} have to pay ${peoples[user]} ₹ ${money} `);
  }
}

split(smrutiranjan);
