// RLAB 308.4.1
// Data Collections

let table = [];
let totalAge = 0;

function parseCSV(csvString) {
    let cell1 = '', cell2 = '', cell3 = '', cell4 = '';
    let cellIndex = 1;
    let rows = [];
  
    // Loop through each character in the CSV string
    for (let i = 0; i < csvString.length; i++) {
      let char = csvString[i];
      
      // Check for the end of a cell
      if (char === ',' || char === '\n') {
        // Store cell data in the appropriate variable
        switch (cellIndex) {
          case 1: rows.push(cell1); cell1 = ''; cellIndex++; break;
          case 2: rows.push(cell2); cell2 = ''; cellIndex++; break;
          case 3: rows.push(cell3); cell3 = ''; cellIndex++; break;
          case 4: rows.push(cell4); cell4 = ''; cellIndex = 1; break;
        }
  
        // If end of row, log the row data
        if (char === '\n' && rows.length === 4) {
          console.log(rows[0], rows[1], rows[2], rows[3]);
          table.push(rows);
          rows = [];
          
        }
      } else {
        // Append character to the current cell
        switch (cellIndex) {
          case 1: cell1 += char; break;
          case 2: cell2 += char; break;
          case 3: cell3 += char; break;
          case 4: cell4 += char; break;
        }
      }
    }
  }
  
  
  const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
  parseCSV(csvString);
  console.log(table)
  
  // Step 1: Split the CSV string into rows
let rows = csvString.split('\n'); // Split into rows

// Step 2: Split each row into columns
let twoDimensionalArray = rows.map(row => row.split(',')); // Create a 2D array

// Cache the array for later use
console.log(twoDimensionalArray);

// Step 3: Transform the 2D array into an array of objects
let headers = twoDimensionalArray[0].map(header => header.toLowerCase()); // Get headers and convert to lowercase
let objectsArray = twoDimensionalArray.slice(1).map(row => {
    let obj = {};
    headers.forEach((header, index) => {
        obj[header] = row[index]; // Assign values to keys
    });
    return obj; // Return the object
});
console.log(objectsArray)

// Step 4: Sorting and Manipulating Data
// Remove last element
objectsArray.pop()
// console.log(objectsArray)
// Insert object to 1 
objectsArray.splice(1, 0, {id: "48", name: "Barry", occupation: "Runner", age: "25"});
// Add object to end of array
objectsArray.push( {id: "7", name: "Bilbo", occupation: "None", age: "111"});
console.log(objectsArray)
// Calculate average age with a loop
for (let i = 0; i < objectsArray.length; i++) {
  totalAge += parseInt(objectsArray[i].age);
}
let averageAge = totalAge / objectsArray.length;
console.log("The average age is:", averageAge);

// Step 5: Full Circle
// Transform data back to csv format

// Make header
let header = Object.keys(objectsArray[0]).join(",");
// Make rows
let row = objectsArray.map(comChar => Object.values(comChar).join(",")).join("\n");
// Combine headers and rows
const csv = `${header}\n${row}`;

console.log(csv);