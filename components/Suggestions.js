import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

function Suggestions() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const usersData = faker.helpers.multiple(createRandomUser, { count: 5 });
        setUsers(usersData);
    }, []);

    return (
        <div className='mt-4 ml-10' >
            <div className='flex justify-between text-sm md-5'>
                <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
                <button className='text-gray-600 font-semibold' >See All</button>

            </div>
            {users.map(user => (
                <div key={user.id} className='flex items-center justify-between mt-3'>
                    <img className='w-10 h-10 rounded-full border p-[2px]' src={user.avatar} alt="" 
                    />

                    <div className='flex-1 ml-4'>
                        <h2 className='font-semibold text-sm'>{user.username}</h2>
                        <h3 className='text-xs text-gray-400'>Works at {user.company}</h3>
                    </div> 

                    <button className='text-blue-400 text-xs font-bold'>Follow</button>

                </div> 
            


            ))}
        </div>

    )
    
}

function createRandomUser() {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
        company: faker.company.name()
    };
}

export default Suggestions