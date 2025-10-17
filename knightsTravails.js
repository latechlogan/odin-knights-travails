#!/usr/bin/env node

function getValidMoves(position) {
  const [x, y] = position;
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

  return moves.filter((coordinates) => isValidPosition(coordinates));
}

function isValidPosition(position) {
  const [x, y] = position;
  return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}

function knightMoves(start, end) {
  let queue = [{ position: start, path: [start] }];
  let visited = new Set();
  visited.add(start.join());

  return visited;
}

export { knightMoves };
