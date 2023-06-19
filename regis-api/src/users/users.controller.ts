import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { CreateusersDto } from './dto/create-users.dto';
import { UpdateusersDto } from './dto/update-users.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUser(@Query('type') type: string) {
        return [{type}];
    }

    @Get(':id')
    getOneUser(@Param('id') id: string) {
        return {};
    }

    @Post()
    createusers(@Body() createusersDto: CreateusersDto) {
        return {
            name: createusersDto.name,
        };
    }

    @Put(':id')
    updateusers(@Param('id') id: string, @Body() updateusersDto: UpdateusersDto) {
        return {
            id,
            name: updateusersDto,
        };
    }

    @Delete(':id')
    removeusers() {
        return {};
    }
}


