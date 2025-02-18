// src/puzzles/puzzles.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePuzzleDto } from './dto/create-puzzle.dto';
import { Puzzle, PuzzleDocument } from 'src/schemas/puzzle.schema';

@Injectable()
export class PuzzlesService {
    constructor(@InjectModel(Puzzle.name) private puzzleModel: Model<PuzzleDocument>) { }

    async create(createPuzzleDto: CreatePuzzleDto): Promise<Puzzle> {
        const createdPuzzle = new this.puzzleModel(createPuzzleDto);
        return createdPuzzle.save();
    }

    async findAll(): Promise<Puzzle[]> {
        return this.puzzleModel.find().exec();
    }

    async findOne(id: string): Promise<Puzzle> {
        return this.puzzleModel.findById(id).exec();
    }

    generatePuzzle(type: string, difficulty: string): CreatePuzzleDto {
        switch (type.toLowerCase()) {
            case 'sudoku':
                return this.generateSudoku(difficulty);
            case 'nonogram':
                return this.generateNonogram(difficulty);
            default:
                throw new Error('Unknown puzzle type');
        }
    }

    private generateSudoku(difficulty: string): CreatePuzzleDto {
        // Implement Sudoku puzzle generation logic here
        // For demonstration, let's create a simple placeholder Sudoku puzzle
        const size = 9;
        const puzzle = Array.from({ length: size }, () => Array(size).fill(null));

        // Sudoku generation logic (simplified)
        for (let i = 0; i < size; i++) {
            puzzle[i][i] = (i % 9) + 1;
        }

        const flattenedPuzzle = puzzle.map(row => row.join('')).join('\n');
        const time = difficulty === 'easy' ? 120 : difficulty === 'medium' ? 180 : 240;

        return { type: 'sudoku', data: flattenedPuzzle, difficulty, time };
    }

    private generateNonogram(difficulty: string): CreatePuzzleDto {
        const size = difficulty === 'easy' ? 4 : difficulty === 'medium' ? 6 : 8;
        const elements = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').slice(0, size);
        const puzzle = Array.from({ length: size }, () => Array(size).fill(null));

        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                const availableElements = elements.filter(el =>
                    !puzzle[row].includes(el) &&
                    !puzzle.map(r => r[col]).includes(el)
                );
                puzzle[row][col] = availableElements[Math.floor(Math.random() * availableElements.length)];
            }
        }

        // Introduce a deliberate mistake
        if (size > 1) {
            puzzle[0][0] = puzzle[0][1]; // Make the first two cells in the first row the same
        }

        const flattenedPuzzle = puzzle.map(row => row.join('')).join('\n');
        const time = difficulty === 'easy' ? 120 : difficulty === 'medium' ? 180 : 240;

        return { type: 'nonogram', data: flattenedPuzzle, difficulty, time };
    }
}
