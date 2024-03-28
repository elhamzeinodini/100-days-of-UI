// object literals instead of switch statements
// instead of this:

const type = "coke";

const getDrinkType = (type) => {
  switch (type) {
    case "coke":
      return "COKE";
      break;

    case "pepsi":
      return "Pepsi";
      break;

    default:
      return "Unknown";
  }
};

// do :
const specifyDrinkTypes = (type) => {
  const drinks = {
    coke: "COKE",
    pepsi: "PEPSI",
    default: "Unknown",
  };

  return drinks[type] || "Not Found";
};

// why should I use switch statements with caution ?
// 1- complexity and readability : as the number of cases increases, switch can become verbose and difficult to read

// 2- performance: switch statements with multiple cases or deeply nested statements can cause performance issues
// compared to other control flow mechanisms (aka, if-else)

// 3- fallthrough happens when we forget to add break at the end of each case statement:

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It is monday");
  case "Sunday":
    console.log("It is Sunday");
  default:
    console.log("It is another day");
}

// the output will be :
// It is monday
// It is Sunday
// It is another day
// switch uses "strict equality operator" , day's value matches the first case and since we didn't specify a break, it goes
// down executing subsequent cases regardless of whether day's value matches the statement or not
// and the execution continues until it (js engine) hits a break or reaches the end of the switch's block

// specify a break at the end of each case statement to prevent this, and since the first case matches, the rest of the
// cases are not gonna be executed.

// 4- limited expressiveness : switch uses === or "strict equality operator" in order to evaluate whether a case matches
// the intended value or not, so the following won't work:

let score = 85;
let grade;

switch (score) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  default:
    grade = "D";
}

console.log("Grade:", grade);

// you have to resort to using if-else statements instead.