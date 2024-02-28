import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "James",
            "email": "james@gmail.com",
            "phone": "0911011",
            'role': 'INTERN'
        },

        {
            "id": 2,
            "name": "Kenny",
            "email": "kenny@gmail.com",
            "phone": "0921011",
            'role': 'ENGINEER'
        },

        {
            "id": 3,
            "name": "Marrow",
            "email": "marrow@gmail.com",
            "phone": "081022",
            'role': 'DOCTOR'
        },

        {
            "id": 4,
            "name": "Doe",
            "email": "doe@gmail.com",
            "phone": "0911044",
            'role': 'NURSE'
        },

        {
            "id": 5,
            "name": "Mike",
            "email": "mike@gmail.com",
            "phone": "0911055",
            'role': 'TEACHER'
        },

        {
            "id": 6,
            "name": "Titty",
            "email": "titty@gmail.com",
            "phone": "0911066",
            'role': 'ADMIN'
        }


    ]

    findAll(role?: 'INTERN' | 'TEACHER' | 'NURSE' | 'DOCTOR' | 'ENGINEER')
    {
        if(role){
            return this.users.filter(user => user.role === role);
        }

        return this.users;
    }

    findOne(id: number)
    {
        const user = this.users.find(user => user.id === id);
        return user;
    }

    createUser(user: {name: string, email: string, phone: string, role: 'INTERN' | 'ENGINEER' | 'NURSE' | 'DOCTOR' | 'ENGINEER' | 'TEACHER'})
    {
        const userByHighestId = [...this.users].sort((a,b) => b.id - a.id);
        const newUser = {
            id: userByHighestId[0].id + 1,
            ...user
        }

        this.users.push(newUser);

        return newUser;
    }

    updateUser(id: number, updatedUser: { name?: string, email?: string, phone?: string, role?: 'INTERN' | 'ENGINEER' | 'DOCTOR' | 'TEACHER' | 'NURSE' | 'ADMIN'} )
    {
        this.users = this.users.map(user => {
            if(user.id === id){
                return {...user, ...updatedUser} //user returns all the properties of the matched object while updatedUser returns the filed that needs to be updated
            }

            return user;
        })

        return this.findOne(id);
    }

    deleteUser(id: number)
    {
        const removedUser = this.findOne(id);

        this.users = this.users.filter(user => user.id !== id);

        return removedUser;
    }
}
