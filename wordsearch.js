
const wordSearch = (puzzle, word) => { 
    const rows = puzzle.map(row => row.join(''))
    const columns = [];
    for (let i = 0; i < puzzle[0].length; i++) {
      let column = [];
      for(let row of puzzle) {
        column.push(row[i])
      };
      columns.push(column.join(""))
    }

    for (row of rows) {
        if (row.includes(word)) {
            return true
        }  
    }
    
    for (column of columns) {
        if (column.includes(word)) {
            return true
        }  
    }
   
    return false
}

// wordSearch([
//   ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//   ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'FRANK')

module.exports = wordSearch

// => returnRow()
// => returnColumn()

//STRETCH
// => returnDiagonal()
// => string.split("").reverse().join("")