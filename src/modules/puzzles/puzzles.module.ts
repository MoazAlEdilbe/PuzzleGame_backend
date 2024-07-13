import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PuzzlesService } from './puzzles.service';
import { PuzzlesController } from './puzzles.controller';
import { PuzzleSchema } from 'src/schemas/puzzle.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Puzzle', schema: PuzzleSchema }])],
  controllers: [PuzzlesController],
  providers: [PuzzlesService],
})
export class PuzzlesModule {}
