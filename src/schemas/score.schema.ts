import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';
import { User } from './user.schema';
import { Puzzle } from './puzzle.schema';

export type ScoreDocument = Score & Document;

@Schema()
export class Score {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({ type: Types.ObjectId, ref: 'Puzzle', required: true })
  puzzle: Puzzle;

  @Prop({ required: true })
  value: number;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ScoreSchema = SchemaFactory.createForClass(Score);
