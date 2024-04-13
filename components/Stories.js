import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import Story from "@/components/Story";
import { useSession } from 'next-auth/react';

function Stories() {
    const [users, setUsers] = useState([]);
    const { data: session } = useSession();

    useEffect(() => {
        const usersData = faker.helpers.multiple(createRandomUser, { count: 20 });
        setUsers(usersData);
    }, []);

    return (
        <div className=' flex space-x-2 p-6 bg-white mt-8 border-gray-200 border 
        rounded-sm overflow-x-scroll custom-scrollbar' >
            {session && (
                <Story img={session.user.image} username={session.user.username} />
            
            )}
            
            
            {users.map(user => (
                <Story 
                key={user.userId} 
                img={user.avatar} 
                username={user.username} />
            ))}
        </div>
    );
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
    };
}

export default Stories;
