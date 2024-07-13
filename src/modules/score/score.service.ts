import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Score, ScoreDocument } from 'src/schemas/score.schema';

@Injectable()
export class ScoreService {
  constructor(@InjectModel(Score.name) private scoreModel: Model<ScoreDocument>) {}

  async addScore(userId: string, puzzleId: string, value: number): Promise<Score> {
    const newScore = new this.scoreModel({ user: userId, puzzle: puzzleId, value });
    return newScore.save();
  }

  async getScoresByUser(userId: string): Promise<Score[]> {
    return this.scoreModel.find({ user: userId }).populate('puzzle').exec();
  }

  async getLeaderboard(): Promise<Score[]> {
    return this.scoreModel.find().sort({ value: -1 }).limit(10).populate('user puzzle').exec();
  }
}
