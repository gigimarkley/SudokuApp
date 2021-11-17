const CHECK_PUZZLE = "CHECK_PUZZLE";

export const _checkPuzzle = (result) => {
  type: CHECK_PUZZLE, result;
};

export const checkPuzzleFunc = (gameArr) => {
  let n = 9;
  let boxTracker = { 0: {}, 3: {}, 6: {} }; //The three objects represent groups of three rows
  let colTracker = {}; //keep track of numbers in columns

  //increments through rows
  for (let i = 0; i < n; i++) {
    let rowTracker = {}; //keep track of numbers found in current row
    let boxRow = 3 * Math.floor(i / 3);
    //increments across row
    for (let j = 0; j < n; j++) {
      let currNum = gameArr[i][j];

      //found the number already in the row
      if (rowTracker[currNum]) {
        return false;
      } else {
        rowTracker[gameArr[i][j]] = 1;
      }

      if (colTracker[currNum]) {
        //found number already in the column
        if (colTracker[currNum][j]) {
          return false;
        } else {
          colTracker[currNum][j] = 1;
        }
      } else {
        colTracker[currNum] = {};
        colTracker[currNum][j] = 1;
      }

      let boxCol = 3 * Math.floor(j / 3);

      //check if box is in boxTracker yet
      if (boxTracker[boxRow][boxCol]) {
        //found number in boxTracker
        if (boxTracker[boxRow][boxCol][currNum]) {
          return false;
        } else {
          boxTracker[boxRow][boxCol][currNum] = 1;
        }
      } else {
        boxTracker[boxRow][boxCol] = {};
        boxTracker[boxRow][boxCol][currNum] = 1;
      }
    }
  }
  return true;
};

export const checkPuzzle = (board, dispatch) => {
  return async (dispatch) => {
    let result = checkPuzzleFunc(board);
    dispatch(_checkPuzzle(result));
  };
};

export default function (state = "", action) {
  switch (action.type) {
    case CHECK_PUZZLE:
      return action.result;
    default:
      return state;
  }
}
