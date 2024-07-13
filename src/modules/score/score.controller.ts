import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ScoreService } from './score.service';

@Controller('score')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Post()
  async addScore(
    @Body('userId') userId: string,
    @Body('puzzleId') puzzleId: string,
    @Body('value') value: number
  ) {
    return this.scoreService.addScore(userId, puzzleId, value);
  }

  @Get('user/:userId')
  async getScoresByUser(@Param('userId') userId: string) {
    return this.scoreService.getScoresByUser(userId);
  }

  @Get('leaderboard')
  async getLeaderboard() {
    return this.scoreService.getLeaderboard();
  }
}
