import { Controller, Get, Param, Post, Body, Patch, Delete, Query} from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get() //Search params included
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN')
    {
        return []
    }

    @Get('interns')
    findAllInterns()
    {
        return []
    }

    @Get(':id')
    findOne(@Param('id') id:String)
    {
        return {
            id
        }
    }

    @Post()
    createUser(@Body() user: {})
    {
        return user
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() user: {})
    {
        return {id, ...user}
    }

    @Delete(':id')
    deteleUser(@Param('id') id: string)
    {
        return {
            id
        }
    }
}
