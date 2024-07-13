// src/puzzles/puzzles.controller.ts
import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { PuzzlesService } from './puzzles.service';
import { CreatePuzzleDto } from './dto/create-puzzle.dto';

@Controller('puzzles')
export class PuzzlesController {
    constructor(private readonly puzzlesService: PuzzlesService) { }

    @Post()
    async create(@Body() createPuzzleDto: CreatePuzzleDto) {
        return this.puzzlesService.create(createPuzzleDto);
    }

    @Get()
    async findAll() {
        return this.puzzlesService.findAll();
    }

    @Get('generate')
    async generate(@Query('type') type: string, @Query('difficulty') difficulty: string) {
        return this.puzzlesService.generatePuzzle(type, difficulty);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.puzzlesService.findOne(id);
    }

}
