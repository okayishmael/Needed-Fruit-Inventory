const fruitData = []; // Array to store data

//Function that add fruits to the table
function addFruit() {
  const fruit = document.getElementById("fruit").value;
  const cost = document.getElementById("cost").value;
  const needed = document.getElementById("needed").value;

  //validate Fruit entry
  if (fruit && cost) {
    const fruitEntry = {
      fruit: fruit,
      cost: parseFloat(cost),
      needed: needed === "yes" ? "Yes" : "No",
    };
    //add input to the array
    fruitData.push(fruitEntry);

    // Run these function on form submit
    displayFruitData();
    clearInputs();
  } else {
    document.getElementById("error-msg").innerHTML =
      "Please fill out the form.";
  }
}

//Display fruit in the browser
function displayFruitData() {
  const fruitList = document.getElementById("fruit-list");
  fruitList.innerHTML = "";

  // Iterate through the array
  fruitData.forEach((entry) => {
    const row = document.createElement("tr");
    row.innerHTML = `
  <td>${entry.fruit}</td>
  <td>$${entry.cost.toFixed(2)}</td>
  <td class= "${entry.needed === "No" ? "not-needed" : ""}"> ${
      entry.needed
    } </td>`;

    fruitList.appendChild(row);
  });
}

//Clear form input fields upon submit
function clearInputs() {
  document.getElementById("error-msg").innerHTML = "";
  document.getElementById("fruit").value = "";
  document.getElementById("cost").value = "";
  document.getElementById("needed").value = "yes";
}
