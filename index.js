// prompt message
const froyoOrder = prompt(`Please enter a list of froyo flavors separated by comma. (example: vanilla,vanilla,vanilla,strawberry,coffee,coffee)`)

// split the input into array of strings
const froyoArray = froyoOrder.split(`,`);
console.log(froyoArray);

// run loop for froyoArray with counter
let vanillaCount = 0;
let strawberryCount = 0;
let coffeeCount = 0;
for (let i = 0; i < froyoArray.length; i++) {
  if (froyoArray[i] == `vanilla`) {
    vanillaCount++;
  }
  if (froyoArray[i] == `strawberry`) {
    strawberryCount++;
  }
  if (froyoArray[i] == `coffee`) {
    coffeeCount++;
  }
};

// object for count
const totalCount = {
  vanilla: vanillaCount,
  strawberry: strawberryCount,
  coffee: coffeeCount
};

console.log(totalCount)