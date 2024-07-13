import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScoreSchema } from 'src/schemas/score.schema';
import { ScoreService } from './score.service';
import { ScoreController } from './score.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Score', schema: ScoreSchema }])],
  controllers: [ScoreController],
  providers: [ScoreService],
})
export class ScoreModule {}
