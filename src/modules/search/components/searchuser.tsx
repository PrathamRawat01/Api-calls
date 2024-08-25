import React from 'react';

interface SearchComponentProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="mb-6 block sm:hidden w-full text-black">
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="p-2 w-full max-w-md mx-auto rounded border border-text-secondary shadow-sm"
            />
        </div>
    );
};

export default SearchComponent;
