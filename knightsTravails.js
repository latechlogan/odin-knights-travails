#!/usr/bin/env node

function getValidMoves(x, y) {
  let moves = [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
  ];

  return moves.filter((coordinates) =>
    isValidPosition(coordinates[0], coordinates[1])
  );
}

function isValidPosition(x, y) {
  return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}

function knightMoves(start, end) {
  // main logic
}

export { knightMoves };
