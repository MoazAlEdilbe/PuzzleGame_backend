import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
  username: { type: String, required: true },
  scores: [{ type: Number }],
  createdAt: { type: Date, default: Date.now },
});

export interface User extends Document {
  id: string;
  username: string;
  scores: number[];
  createdAt: Date;
}
