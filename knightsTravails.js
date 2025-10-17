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

function knightMoves(start, target) {
  let queue = [{ position: start, path: [start] }];
  let visited = new Set();
  visited.add(start.join());

  while (queue.length) {
    let currentSpace = queue.shift();

    if (currentSpace.position.join() === target.join()) {
      const moves = currentSpace.path.length - 1;
      console.log(
        `You made it in ${moves} move${
          moves === 1 ? "" : "s"
        }!  Here's your path:`
      );
      currentSpace.path.forEach((position) => {
        console.log(`  [${position}]`);
      });
      return currentSpace.path;
    }

    let nextMoves = getValidMoves(currentSpace.position);
    nextMoves
      .filter((coordinates) => !visited.has(coordinates.join()))
      .forEach((coordinates) => {
        visited.add(coordinates.join());
        queue.push({
          position: coordinates,
          path: [...currentSpace.path, coordinates],
        });
      });
  }
}

console.log(knightMoves([3, 3], [4, 3]));

export { knightMoves };
