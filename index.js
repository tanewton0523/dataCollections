// RLAB 308.4.1
// Data Collections


function parseCSV(csvString) {
    let cell1 = '', cell2 = '', cell3 = '', cell4 = '';
    let cellIndex = 1;
    let rows = [];
  
    for (let i = 0; i < csvString.length; i++) {
      let char = csvString[i];
      
      if (char === ',' || char === '\n') {
        
        switch (cellIndex) {
          case 1: rows.push(cell1); cell1 = ''; cellIndex++; break;
          case 2: rows.push(cell2); cell2 = ''; cellIndex++; break;
          case 3: rows.push(cell3); cell3 = ''; cellIndex++; break;
          case 4: rows.push(cell4); cell4 = ''; cellIndex = 1; break;
        }
  
        if (char === '\n' && rows.length === 4) {
          console.log(rows[0], rows[1], rows[2], rows[3]);
          rows = [];
        }
      } else {
        
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
  