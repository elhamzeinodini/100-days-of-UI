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
