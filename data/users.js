import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true
    },
    {
        name: 'Jamesh Dev',
        email: 'jamesh@example.com',
        password: bcrypt.hashSync('12345', 10),
 
    },
    {
        name: 'Ajay raj',
        email: 'ajay@example.com',
        password: bcrypt.hashSync('12345', 10),
     
    }
]

export default users