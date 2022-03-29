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
    console.log("Members Added");
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
main(addExpenses, "Amar", 30);
main(addExpenses, "Akbar", 30);
main(addExpenses, "Anthony", 30);

function split(tripname) {
  let obj = {};
  for (let i = 0; i < tripname.length; i++) {
    obj[tripname[i].name] = tripname[i].expenses;
  }
  const people = Object.keys(obj);
  const expenses = Object.values(obj);

  const sum = expenses.reduce((acc, curr) => curr + acc);
  const mean = Math.floor(sum / people.length);

  const sortedPeople = people.sort(
    (personA, personB) => obj[personA] - obj[personB]
  );
  const sortedexpenses = sortedPeople.map((person) => obj[person] - mean);

  if (
    sortedexpenses[0] === sortedexpenses[1] &&
    sortedexpenses[1] === sortedexpenses[2]
  ) {
    console.log("No one have to pay to no one");
  } else {
    let i = 0;
    let j = sortedPeople.length - 1;
    let paying_amount;

    while (i < j) {
      paying_amount = Math.min(-sortedexpenses[i], sortedexpenses[j]);
      sortedexpenses[i] += paying_amount;
      sortedexpenses[j] -= paying_amount;

      console.log(
        `${sortedPeople[i]} owes ${sortedPeople[j]} ${paying_amount}`
      );

      if (sortedexpenses[i] === 0) {
        i++;
      }

      if (sortedexpenses[j] === 0) {
        j--;
      }
    }
  }
}

split(smrutiranjan);
