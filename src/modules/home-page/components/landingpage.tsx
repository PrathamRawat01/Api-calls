'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


type User = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
};

const LandingPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
                setUsers(response.data.data);
                setFilteredUsers(response.data.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, [page]);

    useEffect(() => {
        setFilteredUsers(
            users.filter((user) =>
                `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, users]);

    return (
        <div className="pt-10 px-20 bg-surface ">
            <h1 className=" font-poppins text-center text-2xl lg:text-5xl text-text-primary pb-2 lg:pb-7 font-bold mb-10">Hello ReqRes users!</h1>
           
            <div className="mb-6 block sm:hidden w-full  text-black">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 w-full max-w-md mx-auto rounded border border-text-secondary shadow-sm"
                />
            </div>
          

            <div className="grid grid-cols-1  border-gray-300  bg-background-con  sm:grid-cols-3 gap-5">
                {filteredUsers.map((user) => (
                    <div key={user.id} className="text-center border  border-gray-300  rounded-lg p-6 shadow-md">
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

            {/* Pagination Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-2 mt-6 text-center p-7">
                <button
                    onClick={() => setPage(1)}
                    disabled={page === 1}
                    className={`w-full md:w-32 hover:scale-x-110 transition-300 px-4 py-2 mx-2 rounded text-black ${page === 1 ? 'text-center text-button border-button border-2 py-2 px-4 rounded-md hover:scale-110 transition duration-300 cursor-not-allowed' : 'text-text-plain bg-button border-2 py-2 px-4 rounded-md hover:scale-110 transition duration-300'}`}
                >
                    ← Previous
                </button>
                <button
                    onClick={() => setPage(2)}
                    disabled={page === 2}
                    className={`w-full md:w-32 hover:scale-x-110 transition-300 px-4 py-2 mx-2 rounded text-black ${page === 2 ? 'text-center text-button border-button border-2 py-2 px-4 rounded-md hover:scale-110 transition duration-300 cursor-not-allowed' : 'text-text-plain bg-button border-2 py-2 px-4 rounded-md hover:scale-110 transition duration-300'}`}
                >
                    Next →
                </button>
            </div>


            <style jsx>{`
        @media (max-width: 768px) {
          .searchBar {
            display: block;
          }

          .userGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    );
};

export default LandingPage;
