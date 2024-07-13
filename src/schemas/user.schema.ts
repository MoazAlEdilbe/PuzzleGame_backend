import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Score } from './score.schema';
import { Types } from 'mongoose';

export type UserDocument = User & Document;


@Schema()
export class User {
  id: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Score' }] })
  scores: Types.Array<Score>;

  @Prop({ default: Date.now })
  createdAt: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);


