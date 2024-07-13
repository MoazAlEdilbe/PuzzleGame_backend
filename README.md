
# PuzzleGame Backend

This project is the backend for the PuzzleGame application, built with NestJS. It provides APIs for generating puzzles, managing users, handling scores, and displaying the leaderboard.

## Features

- **Dynamic Puzzle Generation**: Generate puzzles based on type and difficulty.
- **User Management**: Manage user data.
- **Score Handling**: Submit and fetch scores.
- **Leaderboard**: Display top scores.

## Project Structure

```
src/
  modules/
    users/
      users.controller.ts
      users.module.ts
      users.service.ts
    puzzles/
      puzzles.controller.ts
      puzzles.module.ts
      puzzles.service.ts
    score/
      score.controller.ts
      score.module.ts
      score.service.ts
  schemas/
    puzzle.schema.ts
    score.schema.ts
    users.schema.ts

  app.module.ts
  main.ts
README.md
package.json
```

## Setup and Installation

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/MoazAlEdilbe/PuzzleGame_backend.git
   cd PuzzleGame_backend
   ```

2. **Install Dependencies**:

   ```sh
   npm install
   ```

3. **Configure Environment Variables**:

   Create a `.env` file:

   ```env
   MONGO_URI=mongodb://localhost:27017/puzzle-game
   PORT=8080
   ```

4. **Run the Application**:

   ```sh
   npm run start
   ```

## Modules Overview

### User Module

- **user.controller.ts**: Handles user-related API endpoints.
- **user.service.ts**: Contains business logic for user operations.
- **user.schema.ts**: Defines the User schema.

### Puzzle Module

- **puzzle.controller.ts**: Handles puzzle-related API endpoints.
- **puzzle.service.ts**: Contains business logic for puzzle generation.
- **puzzle.schema.ts**: Defines the Puzzle schema.

### Score Module

- **score.controller.ts**: Handles score-related API endpoints.
- **score.service.ts**: Contains business logic for score operations.
- **score.schema.ts**: Defines the Score schema.

## API Endpoints

### Puzzles

- **Generate Puzzle**: `GET /puzzles/generate?type=<type>&difficulty=<difficulty>`

### Users

- **Create User**: `POST /user`
- **Get User Scores**: `GET /user/:username/scores`

### Scores

- **Get Leaderboard**: `GET /score/leaderboard`
- **Add Score**: `POST /score`
- **Get Scores by User**: `GET /score/user/:userId`

....
....
....
---

This README provides an overview of the project, setup instructions, a summary of the modules, and the API endpoints used.