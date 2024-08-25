"use client"
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Pagination from '@/modules/pagination/components/pagination';
import UserCards from '@/modules/cards/components/usercards';
import SearchComponent from '@/modules/search/components/searchuser';

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
    const totalPagesRef = useRef(1);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
                setUsers(response.data.data);
                // setFilteredUsers(response.data.data);        (intially ke liye to hta diya)
                totalPagesRef.current = response.data.total_pages;
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, [page]);

    useEffect(() => {
        const filtered = users.filter((user) =>
            `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
    }, [searchTerm, users]);

    return (
        <div className="pt-10 px-20 bg-surface">
            <h1 className="font-poppins text-center text-2xl lg:text-5xl text-text-primary pb-2 lg:pb-7 font-bold mb-10">Hello ReqRes users!</h1>

            <SearchComponent searchTerm={searchTerm} onSearchChange={setSearchTerm} />

            <UserCards users={filteredUsers} />

            <Pagination
                totalPages={totalPagesRef.current}
                currentPage={page}
                onPageChange={setPage}
            />
        </div>
    );
};

export default LandingPage;
