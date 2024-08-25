import React from 'react';

type User = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
};

type UserCardsProps = {
    users: User[];
};

const UserCards: React.FC<UserCardsProps> = ({ users }) => (
    <div className="grid grid-cols-1 border-gray-300 bg-background-con sm:grid-cols-3 gap-5">
        {users.map((user) => (
            <div key={user.id} className="text-center border border-gray-300 rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold text-text-primary mb-2">{`${user.first_name} ${user.last_name}`}</h2>
                <p className="text-text-secondary mb-2">{user.email}</p>
                <img
                    src={user.avatar}
                    alt={`${user.first_name} ${user.last_name}`}
                    className="w-24 h-24 rounded-full object-cover mx-auto my-2"
                />
            </div>
        ))}
    </div>
);

export default UserCards;
