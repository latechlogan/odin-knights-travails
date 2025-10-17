# Knight's Travails

A JavaScript implementation of the classic Knight's Travails problem using Breadth-First Search (BFS) to find the shortest path for a chess knight between two positions on a standard 8x8 chessboard.

## What This Does

This project finds the shortest path for a knight to move from any square to any other square on a chessboard. The knight follows standard chess rules (L-shaped moves: two squares in one direction, one square perpendicular), and the algorithm guarantees the fewest possible moves using BFS graph traversal.

## Features

- Finds shortest path between any two valid board positions
- BFS algorithm guarantees optimal solution
- Validates all moves stay within board boundaries
- Tracks visited positions to prevent cycles and optimize performance
- Returns complete path from start to finish
- Clean, formatted output showing move count and full path

## Project Structure

```
.
├── knights-travails.js  # Core implementation (knightMoves, getValidMoves, isValidPosition)
└── README.md           # You're reading it
```

## How It Works

### Board Representation

The chessboard is represented as an **implicit graph** where:

- Each square is a coordinate pair `[x, y]` (both values 0-7)
- Valid knight moves from any square represent edges between nodes
- No explicit graph object is needed—moves are generated dynamically

### Knight Movement Pattern

From any position, a knight can move to up to 8 squares following its L-shaped pattern:

- Two squares horizontal, one square vertical (4 possibilities)
- Two squares vertical, one square horizontal (4 possibilities)

### BFS Traversal

The algorithm explores positions level by level:

1. Start at the initial position
2. Generate all valid knight moves from current position
3. Add unvisited positions to queue with their path history
4. Mark positions as visited to avoid redundant exploration
5. Continue until target position is found
6. Return the complete path

### Path Tracking

Each item in the queue carries its position and the complete path taken to reach it. When the target is found, the full solution path is immediately available—no backtracking or reconstruction needed.

## Core Functions

- **`knightMoves(start, target)`**: Main function that finds and returns the shortest path between two positions
- **`getValidMoves(position)`**: Generates all possible knight moves from a given position
- **`isValidPosition(position)`**: Validates that a position stays within the 8x8 board boundaries (0-7 range)

## Usage

```javascript
import { knightMoves } from "./knights-travails.js";

// Simple one-move example
knightMoves([0, 0], [2, 1]);
// Output:
// You made it in 1 move!  Here's your path:
//   [0,0]
//   [2,1]

// More complex path
knightMoves([0, 0], [3, 3]);
// Output:
// You made it in 2 moves!  Here's your path:
//   [0,0]
//   [2,1]
//   [3,3]

// Cross the entire board
knightMoves([0, 0], [7, 7]);
// Output:
// You made it in 6 moves!  Here's your path:
//   [0,0]
//   [2,1]
//   [4,2]
//   [6,3]
//   [4,4]
//   [6,5]
//   [7,7]
```

## Key Implementation Details

- **Queue structure**: Each queue item is an object containing `{position: [x, y], path: [[x1, y1], [x2, y2], ...]}` to maintain path history
- **Visited tracking**: Uses a JavaScript Set with string-converted coordinates (`"x,y"`) for O(1) lookup performance
- **Coordinate validation**: All generated moves are filtered to ensure they fall within the 0-7 range before being added to the queue
- **BFS choice**: BFS explores level-by-level, guaranteeing the first path found is the shortest. DFS could explore unnecessarily long paths before finding the target
- **Multiple valid paths**: For some position pairs, multiple shortest paths exist. The algorithm returns one valid solution

## Algorithm Choice: BFS vs DFS

**Why BFS?**

- Explores positions level by level (all 1-move positions, then all 2-move positions, etc.)
- Guarantees the first solution found is the shortest
- Perfect for shortest-path problems on unweighted graphs

**Why not DFS?**

- Could explore very deep paths before finding the target
- No guarantee the first path found is the shortest
- Would require exploring all paths and comparing lengths

## Assignment Source

This project is from [The Odin Project](https://www.theodinproject.com/) - Full Stack JavaScript curriculum.

## What I Learned

- Implementing BFS on an implicit graph structure
- Using queues for level-order traversal
- Tracking and reconstructing paths through graph exploration
- Choosing appropriate data structures (Set for visited tracking)
- Converting between coordinate representations for efficient lookups
- Breaking down complex problems into manageable helper functions

Built with ☕ and a whole lot of BFS
