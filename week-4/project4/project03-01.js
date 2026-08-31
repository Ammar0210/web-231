/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Ammar Ahmed
      Date: 08/31/2026

      Filename: project03-01.js
*/


// Store all menu item checkboxes in the menuItems collection
let menuItems = document.getElementsByClassName("menuItem");


// Add a click event listener to each menu item
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", calcTotal);
}


// Function to calculate the total cost of selected menu items
function calcTotal() {

    // Set the initial order total to 0
    let orderTotal = 0;

    // Loop through all menu items
    for (let i = 0; i < menuItems.length; i++) {

        // Check whether the menu item is selected
        if (menuItems[i].checked) {

            // Add the selected item's value to the order total
            orderTotal += Number(menuItems[i].value);
        }
    }

    // Display the total order cost
    document.getElementById("billTotal").innerHTML =
        formatCurrency(orderTotal);
}


// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
    return "$" + value.toFixed(2);
}