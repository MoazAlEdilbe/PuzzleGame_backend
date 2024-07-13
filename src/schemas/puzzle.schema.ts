import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PuzzleDocument = Puzzle & Document;

@Schema()
export class Puzzle {
    @Prop({ required: true })
    data: string;

    @Prop({ required: true })
    difficulty: string;

    @Prop({ required: true })
    time: number;

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const PuzzleSchema = SchemaFactory.createForClass(Puzzle);
