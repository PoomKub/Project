import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {

    constructor(private readonly ninjasService: NinjasService) {}

    @Get() 
    getNinjas(@Query('phone')phone: '0111111111'|'0222222222') {
        return this.ninjasService.getNinjas(phone);
    }

    @Get(':id')
    getNinja(@Param('id', ParseIntPipe) id: number) {
        try {
        return this.ninjasService.getNinja(id);
        } 
        catch (err) {
            throw new NotFoundException();
        }
        
    }

    @Post()
    createNinja(@Body(new ValidationPipe()) CreateNinjaDto:CreateNinjaDto) {
        
        return this.ninjasService.createNinja(CreateNinjaDto);
       
    }

    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() updateNinja:UpdateNinjaDto)
    {
        return {
            id,
            name:updateNinja,
        };
    }
    
    @Delete(':id')
    removeNinja(@Param('id') id: string)
    {
        return {
            id,
        };
    }
    
}
