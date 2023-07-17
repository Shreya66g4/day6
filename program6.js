function groupSeats(seatingArrangement, n) {
    const rows = seatingArrangement.length;
    const cols = seatingArrangement[0].length;
  
    let count = 0;
  
    for (let i = 0; i < rows; i++) {
      let consecutiveSeats = 0;
      let j = 0;
  
      while (j < cols) {
        if (seatingArrangement[i][j] === 0) {
          consecutiveSeats++;
        } else {
          consecutiveSeats = 0;
        }
  
        if (consecutiveSeats === n) {
          count++;
          consecutiveSeats--;
        }
  
        j++;
      }
    }
  
    return count;
  }
  const seatingArrangement1 = [
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 0, 0]
  ];
  const n1 = 2;
  console.log(groupSeats(seatingArrangement1, n1)); 
  
  const seatingArrangement2 = [
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 0, 0],
  ];
  const n2 = 4;
  console.log(groupSeats(seatingArrangement2, n2)); 
  