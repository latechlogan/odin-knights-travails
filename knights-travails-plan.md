# Knight's Travails Action Steps

## Project Overview
Build a function that finds the shortest path for a knight to move from one square to another on a chessboard using BFS.

---

## Step-by-Step Plan

### 1. Set up the basic function structure
Create `knightMoves(start, end)` that takes two coordinate arrays as arguments.

### 2. Write a helper function to generate all possible knight moves
Given current coordinates `[x, y]`, return an array of all 8 possible knight move coordinates.

**Note:** You already mapped out the math for this—the +2/-2 with +1/-1 combos.

### 3. Filter out invalid moves
Make sure generated moves stay on the board (coordinates between 0-7).

**Note:** This is that constraint check you identified early on.

### 4. Initialize your data structures
- Create a queue and add your starting position with its path: `{position: [x, y], path: [[x, y]]}`
- Create a Set to track visited positions
- Mark the starting position as visited

**Note:** We dug into the Set approach—use string keys like `"x,y"` to store coordinates.

### 5. Implement the BFS loop
While the queue has items:
- Dequeue the next item
- Check if its position matches the target → if yes, return the path
- Generate all valid knight moves from current position
- For each valid move that hasn't been visited:
  - Mark it as visited *(before enqueueing—we talked about timing)*
  - Enqueue it with an extended path *(carrying its history with it)*

### 6. Format and return the result
Make the output match the expected format from the assignment.

### 7. Test with the provided examples
Run through all the test cases from the assignment to verify it works.

---

## Possible Gaps 🤔

There might be some edge cases or implementation details you'll bump into that we haven't discussed (like exactly how to extend the path when enqueueing, or how to convert coordinates to/from strings for the Set). That's intentional—wrestle with those a bit and see what you come up with. If you get stuck, hit me up.

---

## Expected Output Format
```
> knightMoves([3,3],[4,3])
=> You made it in 3 moves!  Here's your path:
  [3,3]
  [4,5]
  [2,4]
  [4,3]
```

---

**You got this! 🤙**