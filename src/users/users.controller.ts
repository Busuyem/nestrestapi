import { Controller, Get, Param, Post, Body, Patch, Delete, Query} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Get() //Search params included
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN')
    {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:String)
    {
        return this.usersService.findOne(+id); //add + sign to convert the id string above to unary value which is integer since all params are string
    }

    @Post()
    createUser(@Body() user: {name: string, email: string, phone: string, role: 'INTERN' | 'ENGINEER' | 'NURSE' | 'DOCTOR' | 'ENGINEER' | 'TEACHER'})
    {
        return this.usersService.createUser(user);
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() updatedUser: { name?: string, email?: string, phone?: string, role?: 'INTERN' | 'ENGINEER' | 'DOCTOR' | 'TEACHER' | 'NURSE' | 'ADMIN'})
    {
        return this.usersService.updateUser(+id, updatedUser);
    }

    @Delete(':id')
    deteleUser(@Param('id') id: string)
    {
        return this.usersService.deleteUser(+id);
    }
}
