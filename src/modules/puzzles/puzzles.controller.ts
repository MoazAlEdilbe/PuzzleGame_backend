import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { PuzzlesService } from './puzzles.service';
import { CreatePuzzleDto } from './dto/create-puzzle.dto';

@Controller('puzzles')
export class PuzzlesController {
    constructor(private readonly puzzlesService: PuzzlesService) { }

    @Post()
    create(@Body() createPuzzleDto: CreatePuzzleDto) {
        return this.puzzlesService.create(createPuzzleDto);
    }

    @Get()
    findAll() {
        return this.puzzlesService.findAll();
    }

    @Get('/generate')
    generate(@Query('difficulty') difficulty: string) {
        const puzzleDto = this.puzzlesService.generatePuzzle(difficulty);
        console.log(puzzleDto);
        return this.puzzlesService.create(puzzleDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.puzzlesService.findOne(id);
    }

}
