
const wordSearch = function(puzzle, word) { 
    if (!puzzle || !word) throw new Error('No args!');
    if (!Array.isArray(puzzle)) throw new Error('Wrong args!');
    if (!typeof word === "srting") throw new Error('Wrong args!');

    word = word.toUpperCase()
    const reversedWord = word.split('').reverse().join('');
    const rows = puzzle.map(row => row.join('').toUpperCase())
    const columns = [];
    const diagonals = [];
    for (let i = 0; i < puzzle[0].length; i++) {
      let column = [];
      for(let row of puzzle) {
        column.push(row[i])
      };
      columns.push(column.join("").toUpperCase())
    }

    // for (let i = 0; i < puzzle[0].length; i++) {
      // for (let x = 0; x < puzzle[0].length; x++) {
    //   for(let row of puzzle) {
    //     let diagonal = [];
    //     diagonal.push(row[x+i])
    //     diagonals.push(diagonal.join(""))
    //   console.log('diagonal', diagonal)
    //   console.log('diagonals'. diagonals)
    //   };
    // }}

    for (row of rows) {
      
        if (row.includes(word) || row.includes(reversedWord)) {
            return true
        }  
    }
    
    for (column of columns) {
        if (column.includes(word) || column.includes(reversedWord)) {
            return true
        }  
    }
   
    return false
}

// wordSearch([
//   ['A', 'W', 'C', ],
//   ['S', 'E', 'I', ],
//   ['Y', 'F', 'C', ],
// ], 'FRANK')

module.exports = wordSearch

// => ['A', 'SW', 'YEC', 'FI', 'C', 'Y', 'SF', 'AEC', 'WI', 'C']
// => RC
// => [[00], [10, 01], [20, 11, 02], [21, 12], [02], [20], ...]
// ==> ]

// => returnRow()
// => returnColumn()

//STRETCH
// => returnDiagonal()
// => string.split("").reverse().join("")